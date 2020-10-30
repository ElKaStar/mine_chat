import { Block } from "../utils/Block.js";
const template = `<img class="{{ className }}" src="{{ imageSrc}}" alt="{{ alt }}"/>`;
class ImageClass extends Block {
    constructor(props) {
        super("img", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({ className: this.props.className, imageSrc: this.props.imageSrc });
        return res;
    }
    componentDidMount() {
    }
}
export default ImageClass;
//# sourceMappingURL=image.js.map