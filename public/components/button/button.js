import { Block } from "../utils/Block.js";
import { template } from "./buttonTemplate.js";
export class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    componentDidMount() {
    }
    render() {
        this._attachListeners();
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            text: this.props.text,
            type: (!!this.props.type) ? this.props.type : "button"
        });
        return res;
    }
}
//# sourceMappingURL=button.js.map