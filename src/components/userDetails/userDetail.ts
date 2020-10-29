
import {Block} from "../utils/Block.js";

const template =
    `<li class="proforma_item">
        <div class="detailed_info">
           <div class="proforma_label">
              <h3>{{ title }}</h3>
           </div>
           <div class="proforma_value">
               <p> {{ info }}</p>
           </div>
        </div>
     </li>`



export class UserDetail extends Block {
    constructor(props: any) {
        super("li", props);
    }

    render() {

        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            title: this.props.title,
            info: this.props.info
        });
        return res;

    }
}
