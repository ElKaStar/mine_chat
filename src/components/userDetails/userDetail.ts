
import {Block} from "../utils/Block.js";

const template : string =
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

export interface IUser {
    render: () => string,
    componentDidMount: () => void
}

export class UserDetail extends Block implements IUser {
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

    componentDidMount(): void {
    }
}
