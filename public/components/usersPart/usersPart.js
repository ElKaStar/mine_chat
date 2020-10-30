import { Block } from "../utils/Block.js";
const template = `<div class="{{ className }}">
          <div class="messages_items">
             {{{ buttonBack }}}
             <div class="messages_title">
             <h3>Users</h3>
             <label class="search_label">Search</label>
              <input class="search_title"/>
            </div>
          </div>       
            <div class="messages_block">
                
            <ul>
                {{#each usersList}}
                    <li>
                   {{{this}}}
                    </li>
                {{/each}}
            </ul>
            </div>
            <div class="pagination_area">
                <ul>
                <li><h5><<</h5></li>
              {{#each pages}}
                    <li>
                     <h5>
                     {{this}}
                      </h5></li>
                {{/each}}
                 <li><h5>>></h5></li>
                </ul>
            </div>       
            
    </div>`;
export class UsersBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let usersArray = this.props.usersList.map((item) => item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userName: this.props.userName,
            userPhoto: this.props.userPhoto.render(),
            usersList: usersArray,
            buttonBack: this.props.buttonBack.render(),
            pages: this.props.pages
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=usersPart.js.map