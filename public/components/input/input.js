import { Block } from "../utils/Block.js";
import { template } from "./inputTemplate.js";
export class Input extends Block {
    constructor(props) {
        super("input", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            labelText: this.props.labelText,
            placeHolder: this.props.placeHolder,
            type: this.props.type,
            name: this.props.name
        });
        return res;
    }
}
//# sourceMappingURL=input.js.map