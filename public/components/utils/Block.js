import EventBus from "./EventBus.js";
export class Block {
    constructor(tagName = "div", props) {
        this._subscriptions = [];
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            Object.assign(this.props, nextProps);
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
        if (this._meta.hasOwnProperty("tagName")) {
            const { tagName } = this._meta;
            this._element = this._createDocumentElement(tagName);
        }
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }
    componentDidUpdate(oldProps, newProps) {
        if (!oldProps || !newProps) {
            return false;
        }
        console.log("CDU", oldProps, newProps);
        if (JSON.stringify(oldProps) === JSON.stringify(newProps)) {
            return false;
        }
        return true;
    }
    get element() {
        return (this._element ? this._element : null);
    }
    _render() {
        const block = this.render();
        if (block !== undefined) {
            if (this._element) {
                this._element.innerHTML = block;
                this._attachListeners();
            }
        }
    }
    _attachListeners() {
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
    _gatherListeners() {
        const block = this._element;
        const stack = [block];
        const subscriptions = new Map();
        while (stack.length) {
            const current = stack.pop();
            if (!current)
                break;
            const attrs = Array.from(current.attributes).filter((attr) => attr.name.startsWith('on'));
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
    getContent() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        const proxyBlock = new Proxy(props, {
            deleteProperty(target, prop) {
                throw new Error(`нет доступа для ${target} и ${String(prop)}`);
            },
            get(target, prop) {
                let value = target[prop];
                return (typeof value === 'function') ? value.bind(target) : value;
            },
            set(target, prop, val) {
                let oldProps = target[prop];
                target[prop] = val;
                console.log("set");
                self._componentDidUpdate(oldProps, val);
                self.eventBus().emit(Block.EVENTS.FLOW_CDU);
                return true;
            }
        });
        return proxyBlock;
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
};
//# sourceMappingURL=Block.js.map