
import {Block} from "../utils/Block.js";
import {template} from "./LoginFormTemplate.js";
import type {propsLoginFormType} from "../utils/Types.js";
import {Input} from "../input/input.js";
import {Button} from "../button/button.js";



class LoginForm extends Block {

    constructor(props: propsLoginFormType) {
        super("div", props);
    }
    componentDidMount(): void {
    }

    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            formTitle: this.props.formTitle,
            inputLogin: this.props.inputLogin.render(),
            inputPassword: this.props.inputPassword.render(),
            button: this.props.button.render(),
            classNameFP: this.props.classNameFP,
            forgotPassword: this.props.forgotPassword
        });
        return res;

    }
}

const state = {
    className: 'login_form',
    idForm: 'loginForm',
    formTitle: 'Login',
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
    }),
    classNameFP: 'forgot_pass',
    forgotPassword: "Forgot password?"
}

export const loginForm = new LoginForm(state);
