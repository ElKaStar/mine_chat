import { Block } from "../Block.js";
import { render } from "../utils/renderDOM.js";
const template = `<main>
    <div class="{{ className }}">
        <h1 class="errorstatus">
            500 Server Error
        </h1>
        <h2 class="oops">
            Oops.. something went wrong
        </h2>
        <div class="cat">
       
        </div>
        <p class="text">
            Try to refresh the page or feel free to contact us
        </p>

    </div>
</main>`;
export class ServerError extends Block {
    constructor(props) {
        super("main", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc();
        console.log('arrFriends', this.props);
        return res;
    }
}
export const serverError = new ServerError({
    className: "wrapper",
});
render(".app", serverError);
//# sourceMappingURL=500page.js.map