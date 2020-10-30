import { Block } from "../../components/utils/Block.js";
import { render } from "../../components/utils/renderDOM.js";
import { header } from "../../components/Header/simpleHeader.js";
import { registrationForm } from "./registrationForm.js";
import { isValidChecker, validControl } from "../../components/utils/main.js";
const template = `<div class="{{ className }}">
    {{{ header }}}
    <main id="{{ idMain }}" class="{{ classMain }}"">
    <div class="content color_grey">
        {{{ registrationForm }}}
         <div class="{{ regCriper }}"></div>
    </div>
    </main>
</div>`;
const focusInputHandler = (event) => {
    event.preventDefault();
    const newProps = Registration.props.formControls;
    try {
        if (newProps) {
            newProps[event.target.name].touched = true;
        }
        Registration.setProps({
            formControls: newProps
        });
    }
    catch (e) {
        throw new Error("Smth went wrong");
    }
};
const blurInputHandler = (event) => {
    event.preventDefault();
    const newProps = Registration.props.formControls;
    if (newProps) {
        let validCont = validControl((event.target.value ? event.target.value : ''), newProps[event.target.name].validation);
        if (!event.target.value || !validCont) {
            newProps[event.target.name].valid = false;
            Registration.setProps({
                formControls: newProps
            });
            const labelTags = document.getElementsByTagName("label");
            for (let i = 0; i < labelTags.length; i++) {
                if (labelTags[i].id === event.target.name) {
                    labelTags[i].textContent = newProps[event.target.name].errorMessage;
                    labelTags[i].style.display = "block";
                }
            }
        }
        else {
            if (validCont) {
                newProps[event.target.name].valid = true;
                Registration.setProps({
                    formControls: newProps
                });
                const labelTags = document.getElementsByTagName("label");
                for (let i = 0; i < labelTags.length; i++) {
                    if (labelTags[i].id === event.target.name) {
                        labelTags[i].textContent = "";
                        labelTags[i].style.display = "none";
                    }
                }
            }
        }
    }
};
const clickHandler = (event) => {
    event.preventDefault();
    const formElement = document.querySelector("form");
    if (formElement) {
        const formData = new FormData(formElement);
        let validStatus = isValidChecker(Registration.props.formControls);
        if (validStatus) {
            console.log(formData);
        }
        else {
            alert("fault");
        }
    }
    alert("fault");
};
export class RegistrationPage extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            idMain: this.props.id,
            handlers: this.props.handlers,
            classMain: this.props.classMain,
            header: this.props.header.render(),
            registrationForm: this.props.registrationForm.render(),
            regCriper: this.props.regCriper
        });
        return res;
    }
}
const state = {
    className: "site",
    handlers: {
        clickHandler: clickHandler,
        focusInputHandler: focusInputHandler,
        blurInputHandler: blurInputHandler
    },
    formControls: {
        login: {
            value: '',
            type: 'text',
            name: 'login',
            errorMessage: 'Enter correct login',
            valid: true,
            touched: false,
            validation: {
                required: true
            }
        },
        firstName: {
            value: '',
            type: 'text',
            name: 'firstName',
            errorMessage: 'Enter correct first name',
            valid: true,
            touched: false,
            validation: {
                required: true
            }
        },
        secondName: {
            value: '',
            type: 'text',
            name: 'secondName',
            errorMessage: 'Enter correct second name',
            valid: true,
            touched: false,
            validation: {}
        },
        email: {
            value: '',
            type: 'text',
            name: 'email',
            errorMessage: 'Enter correct email',
            valid: true,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        phone: {
            value: '',
            type: 'tel',
            name: 'phone',
            errorMessage: 'Enter correct phone',
            valid: true,
            touched: false,
            validation: {}
        },
        password: {
            value: '',
            type: 'pass',
            name: 'password',
            errorMessage: 'Enter correct password',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    },
    header: header,
    registrationForm: registrationForm,
    idMain: "content",
    classMain: "main-content",
    regCriper: "regCriper"
};
export const Registration = new RegistrationPage(state);
render(".app", Registration);
//# sourceMappingURL=registrationPage.js.map