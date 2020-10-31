import { Block } from "../utils/Block.js";
import { template } from "./messagesTemplate.js";
export class MessagesBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let messagesArray = this.props.messagesList.map((item) => item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userName: this.props.userName,
            userPhoto: this.props.userPhoto.render(),
            messagesList: messagesArray,
            buttonBack: this.props.buttonBack.render(),
            buttonSendMessage: this.props.buttonSendMessage.render()
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=messages.js.map