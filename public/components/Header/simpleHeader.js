import Header from "./Header.js";
import ImageClass from "../image/image.js";
const state = {
    className: 'masthead color_pink',
    text: 'MINE CHAT',
    isAddMenu: false,
    imgLogo: new ImageClass({
        className: "",
        imageSrc: "",
        alt: ""
    })
};
export const simpleHeader = new Header(state);
//# sourceMappingURL=simpleHeader.js.map