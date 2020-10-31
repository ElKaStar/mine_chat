import { Block } from "../utils/Block.js";
import { template } from "./profilePartTemplate.js";
export class ProfilePart extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let detailsListArray = this.props.detailsList.map((item) => item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userPhoto: this.props.userPhoto.render(),
            detailsList: detailsListArray,
            buttonBack: this.props.buttonBack.render(),
            buttonEditProfile: this.props.buttonEditProfile.render(),
            buttonChangePhoto: this.props.buttonChangePhoto.render(),
            buttonChangePassword: this.props.buttonChangePassword.render(),
            inputChangePassword: this.props.inputChangePassword.render(),
            inputRepeatPassword: this.props.inputRepeatPassword.render()
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=profilePart.js.map