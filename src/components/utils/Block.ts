import EventBus, {IEventBus} from "./EventBus.js";
import {metaType, propsType} from "./Types.js";

export interface IBlock {
    _element: Element | null;
    _meta: metaType;
    _subscriptions: any;
    props: propsType;
    eventBus: () => IEventBus;
    render: () => string;
    init: () => void;
    componentDidMount: () => void;
    componentDidUpdate: (oldProps: object, newProps: object) => boolean;
    setProps: (nextProps: object) => void;
    getContent: () => HTMLCollectionOf<any>| Element |null;

}

export abstract class Block implements IBlock{

    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _element: Element | null;
    _meta: metaType;
    _subscriptions: any = [];
    props: propsType;
    eventBus: () => IEventBus;



    protected constructor(tagName :string = "div", props: propsType ) {

        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    protected _registerEvents(eventBus : IEventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources() {
        if (this._meta.hasOwnProperty("tagName")) {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    protected _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

   abstract componentDidMount(): void

    protected _componentDidUpdate(oldProps : object, newProps: object) {
        const response : boolean = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: object, newProps: object) {
        if (!oldProps || !newProps) {
            return false;
        }
        console.log("CDU",oldProps, newProps)
        if (JSON.stringify(oldProps) === JSON.stringify(newProps)) {
            return false;
        }
        return true;
    }

    setProps = (nextProps: object) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    }
    get element() {
        return (this._element?this._element: null) ;
    }

    protected _render() {
        const block = this.render();

        if (block !== undefined) {
            //зачем в учебных материалах описан способ который нельзя использовать и не приведен пример как нужно?
            if (this._element) {
                this._element.innerHTML = block;
                this._attachListeners();
            }
        }

    }
    protected _attachListeners() {
        this._gatherListeners();

        const iterator = this._subscriptions.entries();
        let item = iterator.next();
        while (!item.done) {
            const [elem, events] = item.value;
            Object.keys(events).forEach(eventName => {
                elem.addEventListener(eventName, events[eventName]);
            });
            item = iterator.next();
        }
    }

    protected _gatherListeners() {
        const block = this._element;
        const stack = [block];
        const subscriptions = new Map();

        while (stack.length) {
            const current = stack.pop();

            if (!current)
                break;
            const attrs = Array.from(current.attributes).filter((attr: any )=> attr.name.startsWith('on'));

            if (!attrs.length) {
                const children = Array.from(current.children);
                stack.push(...children);
                continue;
            }

            if (!subscriptions.get(current)) {
                subscriptions.set(current, {});
            }
            const events = subscriptions.get(current);
            attrs.forEach((attr: any) => {
                const eventName = attr.name.substring(2).toLocaleLowerCase();
                try{
                    const handler = this.props.handlers[attr.value];
                    events[eventName] = handler;
                }
                catch (Exception) {
                    console.error(Exception);
                }
                current.removeAttribute(attr.name);
            });

            const children = Array.from(current.children);
            stack.push(...children);
        }

        this._subscriptions = subscriptions;
}

    abstract render() :string

    getContent() {

        return this.element;
    }

    protected _makePropsProxy(props: propsType) {

        const self: any = this;
        const proxyBlock: typeof props = new Proxy(props, {
            deleteProperty(target: {[index: string]:any}, prop: string | number) {
                throw new Error(`нет доступа для ${target} и ${String(prop)}`);
            },
            get(target: {[index: string]:any} , prop: string | number) {
                let value: any = target[prop];
                return (typeof value === 'function') ? value.bind(target) : value;
            },
            set(target: {[index: string]:any}, prop: string | number, val: any) {
                let oldProps = target[prop];
                target[prop] = val;
                console.log("set")
                self._componentDidUpdate(oldProps, val);
                self.eventBus().emit(Block.EVENTS.FLOW_CDU);

                return true;
            }
        })

        return proxyBlock;
    }

    private _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

}


