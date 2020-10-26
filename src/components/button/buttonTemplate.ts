
// Ваш реализованный шаблонизатор
import {Block} from "../Block.js";




const template = `
<button class="{{ className }}" type="{{ type }}" onClick=clickHandler>
    <h3>{{ child }}</h3>
</button>
`;


export class Button extends Block {
    constructor(props: any) {
        // Создаём враппер DOM-элемент button
        super("button", props);
    }


    render() {
        this._attachListeners()
        console.log('button click', this.props)
        // В данном случае render возвращает строкой разметку из шаблонизатора
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({ className: this.props.className,
            child: this.props.child,
            handlers:this.props.handlers,
            type: (!!this.props.type)? this.props.type : ""  });
      //  console.log('buttonTempl', this.props.className)
        return res;

    }
}
