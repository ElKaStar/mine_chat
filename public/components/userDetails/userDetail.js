import { Block } from "../utils/Block.js";
import { template } from "./userDetailsTempate.js";
export class UserDetail extends Block {
    constructor(props) {
        super("li", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            title: this.props.title,
            info: this.props.info
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=userDetail.js.map