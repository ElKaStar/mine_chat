import { Block } from "../utils/Block.js";
import { template } from "./imageTemplate.js";
class ImageClass extends Block {
    constructor(props) {
        super("img", props);
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            imageSrc: this.props.imageSrc,
            alt: this.props.alt
        });
        return res;
    }
    componentDidMount() {
    }
}
export default ImageClass;
//# sourceMappingURL=image.js.map