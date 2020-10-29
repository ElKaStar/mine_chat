import EventBus from "./EventBus.js";
export class Block {
    constructor(tagName = "div", props = {}) {
        this._element = null;
        this._meta = null;
        this._subscriptions = null;
        this.setProps = (nextProps) => {
            //console.log('setProps', this.props, nextProps);
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
            //this._componentDidUpdate(this.props, nextProps);
        };
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
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        // this.eventBus().emit(Block.EVENTS.FLOW_CDU);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidMount() { }
    _componentDidUpdate(oldProps, newProps) {
        //console.log('_update', oldProps, newProps);
        const response = this.componentDidUpdate(oldProps, newProps);
        // console.log('_update', response, oldProps, newProps);
        if (response) {
            //console.log('_update', response, oldProps, newProps);
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        //  console.log('update', oldProps, newProps);
        if (oldProps === newProps) {
            return false;
        }
        return true;
    }
    get element() {
        return this._element;
    }
    _render() {
        const block = this.render();
        // console.log("innerHTML",block)
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        if (this._element) {
            this._element.innerHTML = block;
            this._attachListeners();
        }
    }
    _attachListeners() {
        this._gatherListeners();
        const iterator = this._subscriptions.entries();
        let item = iterator.next();
        while (!item.done) {
            const [elem, events] = item.value;
            Object.keys(events).forEach(eventName => {
                //  console.log(elem, eventName, events[eventName]);
                elem.addEventListener(eventName, events[eventName]);
            });
            item = iterator.next();
        }
    }
    _gatherListeners() {
        const block = this._element;
        const stack = [block];
        const subscriptions = new Map();
        while (stack.length) {
            const current = stack.pop();
            // console.log('block pop',current)
            if (!current)
                break;
            const attrs = Array.from(current.attributes).filter((attr) => attr.name.startsWith('on'));
            //  console.log('block',attrs)
            if (!attrs.length) {
                const children = Array.from(current.children);
                stack.push(...children);
                continue;
            }
            if (!subscriptions.get(current)) {
                subscriptions.set(current, {});
            }
            const events = subscriptions.get(current);
            attrs.forEach((attr) => {
                const eventName = attr.name.substring(2).toLocaleLowerCase();
                try {
                    //   console.log("block props", this.props)
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
        // console.log("this._subscriptions",this._subscriptions)
    }
    // Может переопределять пользователь, необязательно трогать
    render() { }
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;
        const proxyBlock = new Proxy(props, {
            deleteProperty(target, prop) {
                throw new Error(`нет доступа для ${target} и ${prop}`);
            },
            get(target, prop) {
                let value = target[prop];
                return (typeof value === 'function') ? value.bind(target) : value;
            },
            set(target, prop, val) {
                let oldProps = target[prop];
                target[prop] = val;
                //  console.log('set proxy',  oldProps, val);
                self._componentDidUpdate(oldProps, val);
                self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                // this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                return true;
            }
        });
        //  console.log('proxy', proxyBlock);
        return proxyBlock;
    }
    _createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};
//# sourceMappingURL=Block.js.map