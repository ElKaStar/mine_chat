import { Block } from "../utils/Block.js";
const template = `<div class="{{ className }}">
    <form id ="{{ idForm }}">
        <h2>
        {{ formTitle }}
        </h2>
        {{{ firstName }}}
        {{{ secondName }}}
        {{{ email }}}
        {{{ phone }}}
        {{{ inputLogin }}}
        {{{ inputPassword }}}
        {{{ button }}}
        <small class="small_text">I have been registered</small>
    </form>
</div>`;
class RegistrationForm extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            idForm: this.props.idForm,
            formTitle: this.props.formTitle,
            firstName: this.props.firstName.render(),
            secondName: this.props.secondName.render(),
            email: this.props.email.render(),
            phone: this.props.phone.render(),
            inputLogin: this.props.inputLogin.render(),
            inputPassword: this.props.inputPassword.render(),
            button: this.props.button.render()
        });
        return res;
    }
}
export default RegistrationForm;
//# sourceMappingURL=registrationForm.js.map