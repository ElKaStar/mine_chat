// Ваш реализованный шаблонизатор
import { Block } from "../Block.js";
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
        // Создаём враппер DOM-элемент button
        super("header", props);
    }
    render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
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
        console.log('render header', res);
        return res;
    }
}
export default Header;
//# sourceMappingURL=HeaderTemplate.js.map