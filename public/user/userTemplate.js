import { Block } from "../Block.js";
const template = `<div class="{{ className }}">
         <label class="friend_name">{{ friendName }}</label>
         <p class="friend_message">{{ message }}</p>
    </div>`;
export class UserItem extends Block {
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
        console.log('render header', res);
        return res;
    }
}
//# sourceMappingURL=userTemplate.js.map