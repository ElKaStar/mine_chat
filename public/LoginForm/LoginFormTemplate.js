// Ваш реализованный шаблонизатор
import { Block } from "../Block.js";
const template = `<div class="{{ className }}">
    <form id ="{{ idForm }}">
        <h2>
        {{ formTitle }}
        </h2>
        {{{ inputLogin }}}
        {{{ inputPassword }}}
        {{{ button }}}
        <small class="{{ classNameFP}}">{{ forgotPassword }}</small>
    </form>
</div>`;
class LoginForm extends Block {
    constructor(props) {
        // Создаём враппер DOM-элемент button
        super("div", props);
    }
    render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            idForm: this.props.idForm,
            labelText: this.props.labelText,
            formTitle: this.props.formTitle,
            inputLogin: this.props.inputLogin.render(),
            inputPassword: this.props.inputPassword.render(),
            button: this.props.button.render(),
            handlers: this.props.handlers,
            classNameFP: this.props.classNameFP,
            formControls: this.props.formControls,
            forgotPassword: this.props.forgotPassword
        });
        console.log('render handleSubmit', this.props);
        return res;
    }
}
export default LoginForm;
//# sourceMappingURL=LoginFormTemplate.js.map