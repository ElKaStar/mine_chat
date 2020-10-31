
import {Block, IBlock} from "../utils/Block.js";
import type {propsFriendListType} from "../utils/Types.js";
import {template} from "./friendListTemplate.js";




export class FriendList extends Block {

    constructor(props: propsFriendListType) {
        super("div", props);
    }
    componentDidMount(): void {
    }

    render() {
        let friendsArray: IBlock [] = this.props.friends.map((item: IBlock)=> item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            title: this.props.title,
            friends: friendsArray
        });
        return res;

    }
}
