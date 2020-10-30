import { Block } from "../utils/Block.js";
const template = `<div class="{{ className }}">
          <div class="messages_items">
             {{{ buttonBack }}}
             <div class="messages_title">
             <h3>Messages</h3>
              <h3 class="messages_title_title">{{ userName }}</h3>
                    {{{ userPhoto }}}
            </div>
          </div>       
            <div class="messages_block">
                
            <ul>
                {{#each messagesList}}
                    <li>{{{this}}}</li>
                {{/each}}
            </ul>
            </div>
            <div class="input_area">
                <textarea class="messages_input">
                </textarea>
                {{{ buttonSendMessage }}}
            </div>       
            
    </div>`;
export class MessagesBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        let messagesArray = this.props.messagesList.map((item) => item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userName: this.props.userName,
            userPhoto: this.props.userPhoto.render(),
            messagesList: messagesArray,
            buttonBack: this.props.buttonBack.render(),
            buttonSendMessage: this.props.buttonSendMessage.render()
        });
        return res;
    }
    componentDidMount() {
    }
}
//# sourceMappingURL=messages.js.map