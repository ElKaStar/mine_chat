export const template = `<div class="{{ className }}">
          <div class="messages_items">
             {{{ buttonBack }}}
             <div class="messages_title">
             <h3>Profile</h3>
            </div>
          </div>       
            <div class="profile_block">                       
            <ul class="details">
                {{#each detailsList}}
                    {{{this}}}
                {{/each}}
            </ul>
            <div class="edit_part">
                {{{ userPhoto }}}              
                {{{ buttonEditProfile }}}
                {{{ buttonChangePhoto }}}
                {{{ buttonChangePassword }}}
            </div> 
            </div>
            <div>
            {{{ inputChangePassword }}}
            {{{ inputRepeatPassword }}}
            </div>      
            
    </div>`;
//# sourceMappingURL=profilePartTemplate.js.map