import { Block } from "../utils/Block.js";
import { template } from "./messageTemplate.js";
export class MessageItem extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            friendName: this.props.friendName,
            message: this.props.message
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=message.js.map