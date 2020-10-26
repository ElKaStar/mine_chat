import LoginForm from "./LoginFormTemplate.js";
import { Input } from "../input/inputTemplate.js";
import { Button } from "../button/buttonTemplate.js";
export const loginForm = new LoginForm({
    className: 'login_form',
    idForm: 'loginForm',
    formTitle: 'Login',
    inputLogin: new Input({
        className: '',
        id: "loginForm_login",
        placeHolder: "Enter login",
        type: "text",
        name: "login"
    }),
    inputPassword: new Input({
        className: '',
        id: "loginForm_password",
        placeHolder: "Enter password",
        type: "password",
        name: "password"
    }),
    button: new Button({
        className: "",
        type: "submit",
        child: "send"
    }),
    classNameFP: 'forgot_pass',
    forgotPassword: "Forgot password?"
});
//# sourceMappingURL=LoginForm.js.map