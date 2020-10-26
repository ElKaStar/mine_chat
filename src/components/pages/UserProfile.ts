
import {Block} from "../Block.js";

import {render} from "../utils/renderDOM.js";
import {Button} from "../button/buttonTemplate";



const template = `
<div>
    {{ button }}
    {{ userName }}
</div>
`;

export default class UserProfile extends Block {
    constructor() {
        super("div", {
            name: "Login 1",
            button: new Button({
                child: "Text 2"
            })
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setProps({
                name: "Login 3",
            });
        }, 5000);
    }

    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({ userName: this.props.name, button: this.props.button.render() });
        console.log('buttonTempl', this.props.className)
        return res;
    }
}
render(".app", UserProfile);
