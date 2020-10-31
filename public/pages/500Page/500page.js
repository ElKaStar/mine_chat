import { Block } from "../../components/utils/Block.js";
import { render } from "../../components/utils/renderDOM.js";
import { template } from "./500pageTemplate.js";
export class ServerError extends Block {
    constructor(props) {
        super("main", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className
        });
        return res;
    }
}
export const serverError = new ServerError({
    className: "wrapper",
});
render(".app", serverError);
//# sourceMappingURL=500page.js.map