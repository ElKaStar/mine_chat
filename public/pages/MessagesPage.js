import { Block } from "../Block.js";
import { render } from "../utils/renderDOM.js";
import Header from "../Header/HeaderTemplate.js";
import ImageClass from "../image/imageTemplate.js";
import { FriendList } from "../FriendList/friendListTemplate.js";
import { MessagesBlock } from "../messages/messagesTemplate.js";
import { MessageItem } from "../message/messageTemplate.js";
import { Button } from "../button/buttonTemplate.js";
import { FriendItem } from "../friendItem/friendTemplate.js";
const template = `<div class="{{ className }}">
    {{{ header }}}
    <main id="{{ idMain }}" class="{{ classMain }}"">
        {{{ friendsList }}}
        {{{ messagesPart }}}
    </main>
</div>`;
export class MessagesPage extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
    }
    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            header: this.props.header.render(),
            idMain: this.props.idMain,
            classMain: this.props.classMain,
            friendsList: this.props.friendsList.render(),
            messagesPart: this.props.messagesPart.render()
        });
        console.log('arrFriends', this.props);
        return res;
    }
}
export const messagesPage = new MessagesPage({
    className: "site",
    header: new Header({
        className: 'masthead grass',
        child: 'MINE CHAT',
        imgLogo: new ImageClass({
            className: "avatar",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        refToPage: "/users",
        refToSignInSignOut: "/",
        MenuItem: "Users",
        SignInSignOut: "Sign out"
    }),
    idMain: "content",
    classMain: "main-content",
    friendsList: new FriendList({
        className: "friends",
        title: "My friends",
        friends: [
            new FriendItem({
                className: "friend_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Sergei",
                userStatus: "I am happy"
            }),
            new FriendItem({
                className: "friend_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Katya",
                userStatus: "I am happy too"
            }),
            new FriendItem({
                className: "friend_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Alice",
                userStatus: "What is up?"
            })
        ]
    }),
    messagesPart: new MessagesBlock({
        className: "messages",
        userName: "Sergei",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        messagesList: [
            new MessageItem({
                className: "message_item friend",
                friendName: "Sergei",
                message: "Hello"
            }),
            new MessageItem({
                className: "message_item you",
                friendName: "YOU",
                message: "Hello. How are you"
            }),
            new MessageItem({
                className: "message_item friend",
                friendName: "Sergei",
                message: "Fine. And you?"
            })
        ],
        buttonBack: new Button({
            child: "<-- Back",
            className: "btn_back"
        }),
        buttonSendMessage: new Button({
            child: "send",
            className: "btn_send_message"
        })
    })
});
render(".app", messagesPage);
//# sourceMappingURL=MessagesPage.js.map