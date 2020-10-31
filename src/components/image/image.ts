
import {Block} from "../utils/Block.js";
import {template} from "./imageTemplate.js";
import type {propsImgPhotoType} from "../utils/Types.js";


class ImageClass extends Block {
    constructor(props: propsImgPhotoType) {
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

    componentDidMount(): void {
    }
}
export default ImageClass