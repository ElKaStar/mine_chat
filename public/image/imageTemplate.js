// Ваш реализованный шаблонизатор
import { Block } from "../Block.js";
const template = `<img class="{{ className }}" src="{{ imageSrc}}" alt="{{ alt }}"/>`;
class ImageClass extends Block {
    constructor(props) {
        // Создаём враппер DOM-элемент button
        super("img", props);
    }
    render() {
        // В данном случае render возвращает строкой разметку из шаблонизатора
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({ className: this.props.className, imageSrc: this.props.imageSrc });
        console.log('render header', res);
        return res;
    }
}
export default ImageClass;
//# sourceMappingURL=imageTemplate.js.map