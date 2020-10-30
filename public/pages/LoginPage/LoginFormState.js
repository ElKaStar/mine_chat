import LoginForm from "../../components/LoginForm/LoginForm.js";
import { Input } from "../../components/input/input.js";
import { Button } from "../../components/button/button.js";
export const loginFormState = new LoginForm({
    className: 'login_form',
    idForm: 'loginFormState',
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
//# sourceMappingURL=LoginFormState.js.map