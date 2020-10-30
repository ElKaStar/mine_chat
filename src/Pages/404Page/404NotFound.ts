
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";




const template =
    `<div class="wrapper">
        <div class="main">
            <h1>
                404
            </h1>
            <p>
                page not found
            </p>
            <button>
                <h3>
                    Back to home
                </h3>
            </button>
        </div>
        <div class="endermen">
        
</div>
        <div>`

export class NotFound extends Block {
    constructor(props: object) {
        super("div", props);
    }

    componentDidMount() {

    }

    render() {


        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc();
        console.log('arrFriends',this.props)
        return res;
    }
}


export const notFound = new NotFound({
    className: "site",

})



render(".app", notFound);
