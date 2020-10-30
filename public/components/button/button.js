import { Block } from "../utils/Block.js";
const template = `
<button class="{{ className }}" type="{{ type }}" onClick=clickHandler>
    <h3>{{ child }}</h3>
</button>
`;
export class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    componentDidMount() {
    }
    render() {
        this._attachListeners();
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({ className: this.props.className,
            child: this.props.child,
            handlers: this.props.handlers,
            type: (!!this.props.type) ? this.props.type : "" });
        return res;
    }
}
//# sourceMappingURL=button.js.map