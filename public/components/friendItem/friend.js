import { Block } from "../utils/Block.js";
const template = `<div class="{{ className }}">
        {{{ imgPhoto }}}
            <div class="friend_info">
                <h3>{{ userName }}</h3>
                <p>{{ userStatus }}</p>
            </div>
    </div>`;
export class FriendItem extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            imgPhoto: this.props.imgPhoto.render(),
            userName: this.props.userName,
            userStatus: this.props.userStatus
        });
        return res;
    }
}
//# sourceMappingURL=friend.js.map