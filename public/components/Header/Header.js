import { Block } from "../utils/Block.js";
const template = `<nav class="{{ className }}">
    <ul>
     {{#if isAddMenu}}
        <li>
            {{{ imgLogo }}}
        </li>
        {{/if}}
        <li class="header">
            <header>
                <h1>
                    {{ child }}
                </h1>
            </header>
        </li>
        <li class="link">
            <a href="{{ refToPage }}">{{MenuItem}}</a>
        </li>
        <li class="sign">
            <a href="{{ refToSignInSignOut }}">{{SignInSignOut}}</a>
        </li>
    </ul>
</nav>`;
class Header extends Block {
    constructor(props) {
        super("header", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            child: this.props.child,
            imgLogo: this.props.imgLogo.render(),
            refToPage: this.props.refToPage,
            refToSignInSignOut: this.props.refToSignInSignOut,
            MenuItem: this.props.MenuItem,
            SignInSignOut: this.props.SignInSignOut
        });
        return res;
    }
}
export default Header;
//# sourceMappingURL=Header.js.map