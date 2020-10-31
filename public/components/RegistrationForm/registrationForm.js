import { Block } from "../utils/Block.js";
import { template } from "./registrationFormTemplate.js";
import { Input } from "../input/input.js";
import { Button } from "../button/button.js";
class RegistrationForm extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
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
const state = {
    className: 'registration_form',
    idForm: 'registrationForm',
    formTitle: 'Registration',
    firstName: new Input({
        className: '',
        placeHolder: "Enter first name",
        type: "text",
        name: "firstName",
        labelText: ""
    }),
    secondName: new Input({
        className: '',
        placeHolder: "Enter second name",
        type: "text",
        name: "secondName",
        labelText: ""
    }),
    email: new Input({
        className: '',
        placeHolder: "Enter email",
        type: "text",
        name: "email",
        labelText: ""
    }),
    phone: new Input({
        className: '',
        placeHolder: "Enter phone",
        type: "tel",
        name: "phone",
        labelText: ""
    }),
    inputLogin: new Input({
        className: '',
        placeHolder: "Enter login",
        type: "text",
        name: "login",
        labelText: ""
    }),
    inputPassword: new Input({
        className: '',
        placeHolder: "Enter password",
        type: "password",
        name: "password",
        labelText: ""
    }),
    button: new Button({
        className: "",
        type: "submit",
        text: "send"
    })
};
export const registrationForm = new RegistrationForm(state);
//# sourceMappingURL=registrationForm.js.map