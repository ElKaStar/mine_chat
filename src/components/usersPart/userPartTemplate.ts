export const template =
    `<div class="{{ className }}">
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
            
    </div>`