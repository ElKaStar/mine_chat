
import {Block, IBlock} from "../utils/Block.js";
import {template} from "./profilePartTemplate.js";
import type {propsProfilePartType} from "../utils/Types.js";




export class ProfilePart extends Block {
    constructor(props: propsProfilePartType) {
        super("div", props);
    }

    render() {
        let detailsListArray:  IBlock [] = this.props.detailsList.map((item: IBlock)  => item.render())
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

    componentDidMount(): void {
    }
}
