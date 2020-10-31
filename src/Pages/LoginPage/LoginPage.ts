
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import {simpleHeader} from "../../components/Header/simpleHeader.js";
import ImageClass from "../../components/image/image.js";
import {isValidChecker, validControl} from "../../components/utils/main.js";
import type {EventType, propsLoginPageType} from "../../components/utils/Types.js";
import {loginForm} from "../../components/LoginForm/LoginForm.js";
import {template} from "./LoginPageTemplate.js";



const focusInputHandler = (event: EventType) =>  {
    console.log("focusInputHandler",event.target.value, Login.props.formControls)
        event.preventDefault()
        const newProps = Login.props.formControls
        newProps[event.target.name].touched  = true
        Login.setProps({
            ...Login.props,
            formControls: newProps
        });
        console.log(Login.props)
}

const blurInputHandler = (event: EventType) => {
    console.log("blurInputHandler",event.target.value)
    event.preventDefault()
    const newProps = Login.props.formControls
    let validCont : boolean = validControl(event.target.value, newProps[event.target.name].validation)
    if (!event.target.value || !validCont) {
        newProps[event.target.name].valid = false
        Login.setProps({
            ...Login.props,
            formControls: newProps
        });
        const labelTags  = document.getElementsByTagName("label");
        for (let i : number = 0; i < labelTags.length; i++) {
            if (labelTags[i].id === event.target.name) {
                labelTags[i].textContent = newProps[event.target.name].errorMessage
                labelTags[i].style.display = "block"
            }
        }
    } else {
        if (validCont) {
            newProps[event.target.name].value = event.target.value
            newProps[event.target.name].valid = true
            Login.setProps({
                ...Login.props,
                formControls: newProps
            });
            const labelTags = document.getElementsByTagName("label");
            for (let i : number = 0; i < labelTags.length; i++) {
                if (labelTags[i].id === event.target.name) {
                    labelTags[i].textContent = ""
                    labelTags[i].style.display = "none"
                }
            }
        }
    }
}

const clickHandler = (event: EventType) => {
    event.preventDefault();
    const formElement = document.querySelector("form");
    if (formElement) {
        const formData = new FormData(formElement)!;
        let validStatus = isValidChecker(Login.props.formControls)
        console.log(validStatus)
        if (validStatus) {
            console.log(formData)
        } else {
           alert("fault")
        }
    } else {
        alert("fault")
    }
    console.log(Login.props)
}



export class LoginPage extends Block {


    constructor(props: propsLoginPageType) {
        super("div", props);
    }

    componentDidMount() {
    }

    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            handlers: this.props.handlers,
            classMain: this.props.classMain,
            header: this.props.header.render(),
            loginForm: this.props.loginForm.render(),
            Friends: this.props.Friends,
            imageCriper: this.props.imageCriper.render()
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
            errorMessage: 'Enter correct email',
            valid: true,
            touched: false,
            validation: {
                required: true
            }
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
    header: simpleHeader,
    loginForm: loginForm,
    classMain: "main-content",
    Friends: "mates",
    imageCriper: new ImageClass({
        className: "criper",
        imageSrc: "https://cdn.glitch.com/fd89db39-ae54-42a6-85ec-9a209641745c%2Fthumbnails%2Funnamed.png?1602255038358",
        alt: "criper"
    })
}

export const Login = new LoginPage(state);
render(".app", Login);
