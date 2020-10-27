
import {Block} from "../Block.js";

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
        // Создаём враппер DOM-элемент
        super("input", props);
    }
    componentDidMount() {
        this.eventBus().on("touch", () => alert('click'))
    }

    render() {
       // let valid = this.props.formControls[this.props.name].valid

        // В данном случае render возвращает строкой разметку из шаблонизатора
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
        console.log('render header', res)
        return res;

    }
}
