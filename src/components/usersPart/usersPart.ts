
import {Block, IBlock} from "../utils/Block.js";
import {template} from "./userPartTemplate.js";
import type {propsUserPartType} from "../utils/Types.js";




export class UsersBlock extends Block {
    constructor(props: propsUserPartType) {
        super("div", props);
    }

    render() {
        let usersArray: IBlock [] = this.props.usersList.map((item: IBlock) => item.render())
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userName: this.props.userName,
            userPhoto: this.props.userPhoto.render(),
            usersList: usersArray,
            buttonBack: this.props.buttonBack.render(),
            pages: this.props.pages
        });
        return res;

    }

    componentDidMount(): void {
    }
}
