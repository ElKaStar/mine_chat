import { Block } from "../utils/Block.js";
import { template } from "./userPartTemplate.js";
export class UsersBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let usersArray = this.props.usersList.map((item) => item.render());
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
    componentDidMount() {
    }
}
//# sourceMappingURL=usersPart.js.map