
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import Header from "../../components/Header/Header.js";
import ImageClass from "../../components/image/image.js";
import {FriendList} from "../../components/FriendList/friendList.js";

import {MessagesBlock} from "../../components/messages/messages.js";
import {MessageItem} from "../../components/message/message.js";
import {Button} from "../../components/button/button.js";
import {FriendItem} from "../../components/friendItem/friend.js";
import {template} from "./MessagePageTemplate.js";
import type {propsMessagesPageType} from "../../components/utils/Types.js";

export interface IMessages {
    componentDidMount: () => void,
    render: () => string
}

export class MessagesPage extends Block {
    constructor(props: propsMessagesPageType) {
        super("div", props);
    }

    componentDidMount() {
    }

    render() {
        let callbackFunc = Handlebars.compile(template);
        let res = callbackFunc({
            className: this.props.className,
            header: this.props.header.render(),
            classMain: this.props.classMain,
            friendsList: this.props.friendsList.render(),
            messagesPart: this.props.messagesPart.render()
        });
        return res;
    }
}
const messages = [
    {
        className: "message_item friend",
        friendName: "Sergei",
        message: "Hello"
    },
    {
        className: "message_item you",
        friendName: "YOU",
        message: "Hello. How are you"
    },
    {
        className: "message_item friend",
        friendName: "Sergei",
        message: "Fine. And you?"
    }
]
const friends = [
    {
        className: "friend_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Sergei",
        userStatus: "I am happy"
    },
    {
        className: "friend_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Katya",
        userStatus: "I am happy too"
    },
    {
        className: "friend_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Alice",
        userStatus: "What is up?"
    }
]
const state = {
    className: "site",
    header: new Header({
        className: 'masthead grass',
        text: 'MINE CHAT',
        imgLogo: new ImageClass({
            className: "avatar",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        refToPage: "/users",
        refToSignInSignOut: "/",
        MenuItem: "Users",
        SignInSignOut: "Sign out",
        isAddMenu: true
    }),
    classMain: "main-content",
    friendsList: new FriendList({
        className: "friends",
        title: "My friends",
        friends: friends.map(friend => new FriendItem({
        ...friend,
        imgPhoto: new ImageClass(friend.imgPhoto)
}))
    }),
    messagesPart: new MessagesBlock({
        className: "messages",
        userName: "Sergei",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        messagesList: messages.map(item => new MessageItem(item)),
        buttonBack: new Button({
            text: "<-- Back",
            className: "btn_back"
        }),
        buttonSendMessage: new Button({
            text: "send",
            className: "btn_send_message"
        })
    })
}

export const messagesPage = new MessagesPage(state)



render(".app", messagesPage);
