
import {Block} from "../utils/Block.js";
import {template} from "./friendTemplate.js";
import type {propsFriendType} from "../utils/Types.js";


export class FriendItem extends Block {
    constructor(props: propsFriendType) {
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

    componentDidMount(): void {
    }
}
