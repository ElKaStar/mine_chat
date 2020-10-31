import { Block } from "../utils/Block.js";
import { template } from "./friendTemplate.js";
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
    componentDidMount() {
    }
}
//# sourceMappingURL=friend.js.map