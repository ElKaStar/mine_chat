
import {Block} from "../utils/Block.js";

const template =
    `<div class="{{ className }}">
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
            
    </div>`



export class ProfilePart extends Block {
    constructor(props: object) {
        super("div", props);
    }

    render() {
        let detailsListArray: any[] = this.props.detailsList.map((item: any) => item.render())
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            userPhoto: this.props.userPhoto.render(),
            detailsList: detailsListArray,
            buttonBack: this.props.buttonBack.render(),
            buttonEditProfile: this.props.buttonEditProfile.render(),
            buttonChangePhoto: this.props.buttonChangePhoto.render(),
            buttonChangePassword: this.props.buttonChangePassword.render(),
            inputChangePassword: this.props.inputChangePassword.render(),
            inputRepeatPassword: this.props.inputRepeatPassword.render()
        });
        console.log('render messagesTemplate')
        return res;

    }

    componentDidMount(): void {
    }
}
