
import {Block} from "../utils/Block.js";
import {template} from "./inputTemplate.js";
import type {propsInputType} from "../utils/Types.js";



export class Input extends Block {

    constructor(props: propsInputType) {
        super("input", props);
    }
    componentDidMount(): void {

    }

    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            labelText: this.props.labelText,
            placeHolder: this.props.placeHolder,
            type: this.props.type,
            name: this.props.name
        });
        return res;

    }
}
