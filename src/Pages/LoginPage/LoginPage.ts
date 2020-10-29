
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import {header} from "../../components/Header/simpleHeader.js";
import {loginForm} from "./LoginForm.js";
import ImageClass from "../../components/image/image.js";
import {isValidChecker, validControl} from "../../components/utils/main.js";




const template : string =
`<div class="{{ className }}">
    {{{ header }}}
    <main id="{{ idMain }}" class="{{ classMain }}"">
    <div class="content color_body">
      <div class="image">
      <div class="{{ Friends }}"></div>
      </div>  
        {{{ loginForm }}}
         {{{ imageCriper }}}
    </div>
    </main>
</div>`


const focusInputHandler = <T extends IEvent> (event: T) =>  {
        event.preventDefault()
        const newProps : INewProps = Login.props.formControls
        newProps[event.target.name].touched  = true!
        Login.setProps({
            formControls: newProps
        });
}

const blurInputHandler = <T extends IEvent> (event: T) => {
    event.preventDefault()
    const newProps : INewProps = Login.props.formControls
    let validCont : boolean = validControl(event.target.value, newProps[event.target.name].validation)
    if (!event.target.value || !validCont) {

        newProps[event.target.name].valid = false
        Login.setProps({
            formControls: newProps
        });
        const labelTags : HTMLCollectionOf<any> = document.getElementsByTagName("label");
        for (let i : number = 0; i < labelTags.length; i++) {
            if (labelTags[i].id === event.target.name) {
                labelTags[i].textContent = newProps[event.target.name].errorMessage
                labelTags[i].style.display = "block"
            }
        }
    } else {
        if (validCont) {
            newProps[event.target.name].valid = true
            Login.setProps({
                formControls: newProps
            });
            const labelTags: HTMLCollectionOf<any> = document.getElementsByTagName("label");
            for (let i : number = 0; i < labelTags.length; i++) {
                if (labelTags[i].id === event.target.name) {
                    labelTags[i].textContent = ""
                    labelTags[i].style.display = "none"
                }
            }
        }
    }
}

const clickHandler = <T extends IEvent> (event: T) => {
    event.preventDefault();
    let validStatus = isValidChecker(Login.props.formControls)
    if (validStatus) {
        alert("submit")
    } else {
        alert("fault")
    }
}



export class LoginPage extends Block {


    constructor(props: object) {
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
            loginForm: this.props.loginForm.render(),
            Friends: this.props.Friends,
            imageCriper: this.props.imageCriper.render()
        });
        return res;
    }
}


export const Login = new LoginPage({
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
    header: header,
    labelText: "",
    loginForm: loginForm,
    idMain: "content",
    classMain: "main-content",
    Friends: "mates",
    imageCriper: new ImageClass({
        className: "criper",
        imageSrc: "https://cdn.glitch.com/fd89db39-ae54-42a6-85ec-9a209641745c%2Fthumbnails%2Funnamed.png?1602255038358"
    })
});




render(".app", Login);
