import { Block } from "../utils/Block.js";
import { template } from "./HeaderTemplate.js";
class Header extends Block {
    constructor(props) {
        super("header", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            text: this.props.text,
            isAddMenu: this.props.isAddMenu,
            imgLogo: this.props.imgLogo.render(),
            refToPage: this.props.refToPage,
            refToSignInSignOut: this.props.refToSignInSignOut,
            MenuItem: this.props.MenuItem,
            SignInSignOut: this.props.SignInSignOut
        });
        return res;
    }
    componentDidMount() {
    }
}
export default Header;
//# sourceMappingURL=Header.js.map