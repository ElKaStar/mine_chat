
import {Block} from "../utils/Block.js";

const template =
`<label id="{{ name }}" class="label_input">{{ labelText }}</label>
<input class="{{ className }}" 
        id="{{ id }}"
        placeholder="{{ placeHolder}}"
        type="{{ type }}"
        name="{{ name }}"
        onfocus=focusInputHandler
        onblur=blurInputHandler
        />`


export class Input extends Block {
    constructor(props: any) {
        super("input", props);
    }


    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            labelText: this.props.labelText,
            id: this.props.id,
            formControls: this.props.formControls,
            placeHolder: this.props.placeHolder,
            type: this.props.type,
            name: this.props.name
        });
        return res;

    }
}
