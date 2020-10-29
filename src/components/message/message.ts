
import {Block} from "../utils/Block.js";

const template =
    `<div class="{{ className }}">
         <label class="friend_name">{{ friendName }}</label>
         <p class="friend_message">{{ message }}</p>
    </div>`



export class MessageItem extends Block {
    constructor(props: any) {
        super("div", props);
    }

    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            friendName: this.props.friendName,
            message: this.props.message
        });
        console.log('render header', res)
        return res;

    }
}
