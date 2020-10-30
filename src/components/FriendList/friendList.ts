
import {Block} from "../utils/Block.js";

const template =
    `<div class="{{ className }}">
            <div class="title">
                <h3>{{ title }}</h3>
            </div>
            <div class="friends_list">
            <ul>
                {{#each friends}}
                    <li>{{{this}}}</li>
                {{/each}}
            </ul>
            </div>
    </div>`



export class FriendList extends Block {

    constructor(props: object) {
        super("div", props);
    }
    componentDidMount(): void {
    }

    render() {
        let friendsArray: any[] = this.props.friends.map((item: any)=> item.render());
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            title: this.props.title,
            friends: friendsArray
        });
        return res;

    }
}
