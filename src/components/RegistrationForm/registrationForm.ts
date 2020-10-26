
import RegistrationForm from "./registrationFormTemplate.js";
// @ts-ignore
import {Input} from "../input/inputTemplate.js";
// @ts-ignore
import {Button} from "../button/buttonTemplate.js";


export const registrationForm = new RegistrationForm({
    className: 'registration_form',
    idForm: 'registrationForm',
    formTitle: 'Registration',
    firstName: new Input({
        className: '',
        id: "regForm_firstName",
        placeHolder: "Enter first name",
        type: "text",
        name: "firstName"
    }),
    secondName: new Input({
        className: '',
        id: "regForm_secondName",
        placeHolder: "Enter second name",
        type: "text",
        name: "secondName"
    }),
    email: new Input({
        className: '',
        id: "regForm_email",
        placeHolder: "Enter email",
        type: "text",
        name: "email"
    }),
    phone: new Input({
        className: '',
        id: "regForm_phone",
        placeHolder: "Enter phone",
        type: "tel",
        name: "phone"
    }),
    inputLogin: new Input({
        className: '',
        id: "regForm_login",
        placeHolder: "Enter login",
        type: "text",
        name: "login"
    }),
    inputPassword: new Input({
        className: '',
        id: "regForm_password",
        placeHolder: "Enter password",
        type: "password",
        name: "password"
    }),
    button: new Button({
        className: "",
        type: "submit",
        child: "send"
    })
});



