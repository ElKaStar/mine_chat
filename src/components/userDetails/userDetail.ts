
import {Block, IBlock} from "../utils/Block.js";
import {template} from "./userDetailsTempate.js";
import type {propsUserDetailsType} from "../utils/Types.js";



export class UserDetail extends Block implements IBlock {
    constructor(props: propsUserDetailsType) {
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

    componentDidMount(): void {
    }
}
