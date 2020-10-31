
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import {template} from "./404NotFoundTemplate.js";


export class NotFound extends Block {
    constructor(props: {link: string}) {
        super("div", props);
    }

    componentDidMount() {

    }

    render() {


        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            link: this.props.link
        });
        return res;
    }
}


export const notFound = new NotFound({
    link: "/",
})



render(".app", notFound);
