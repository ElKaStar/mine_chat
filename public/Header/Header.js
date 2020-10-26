import Header from "./HeaderTemplate.js";
import ImageClass from "../image/imageTemplate.js";
export const header = new Header({
    className: 'masthead color_pink',
    child: 'MINE CHAT',
    isAddMenu: false,
    imgLogo: new ImageClass({}),
});
// app — это class дива в корне DOM
//render(".app", header);
//# sourceMappingURL=Header.js.map