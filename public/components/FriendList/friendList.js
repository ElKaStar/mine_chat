import { Block } from "../utils/Block.js";
import { template } from "./friendListTemplate.js";
export class FriendList extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
    }
    render() {
        let friendsArray = this.props.friends.map((item) => item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            title: this.props.title,
            friends: friendsArray
        });
        return res;
    }
}
//# sourceMappingURL=friendList.js.map