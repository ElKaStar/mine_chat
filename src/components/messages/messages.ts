
import {Block, IBlock} from "../utils/Block.js";
import {template} from "./messagesTemplate.js";
import type {propsMessagesType} from "../utils/Types.js";



export class MessagesBlock extends Block {
    constructor(props: propsMessagesType) {
        super("div", props);
    }

    render() {
        let messagesArray: IBlock [] = this.props.messagesList.map((item: IBlock) => item.render())
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

    componentDidMount(): void {
    }
}
