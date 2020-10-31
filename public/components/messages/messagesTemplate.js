export const template = `<div class="{{ className }}">
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
//# sourceMappingURL=messagesTemplate.js.map