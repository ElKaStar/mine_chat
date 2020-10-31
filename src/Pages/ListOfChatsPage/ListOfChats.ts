
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import Header from "../../components/Header/Header.js";
import ImageClass from "../../components/image/image.js";
import {FriendList} from "../../components/FriendList/friendList.js";
import {Button} from "../../components/button/button.js";
import {FriendItem} from "../../components/friendItem/friend.js";
import {UsersBlock} from "../../components/usersPart/usersPart.js";
import {template} from "./ListOfChatsPageTemplate.js";
import type { propsListOfChatsType} from "../../components/utils/Types.js";


export class ListOfChatsPage extends Block {
    constructor(props: propsListOfChatsType) {
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
            usersPart: this.props.usersPart.render()
        });
        return res;
    }
}
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
const users = [
    {
        className: "user_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Katya",
        userStatus: "I am happy too"
    },
    {
        className: "user_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Katya",
        userStatus: "I am happy too"
    },
    {
        className: "user_item",
        imgPhoto: {
            className: "userLogo",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        userName: "Katya",
        userStatus: "I am happy too"
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
        refToPage: "/profile",
        refToSignInSignOut: "/",
        MenuItem: "Profile",
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
    usersPart: new UsersBlock({
        className: "messages",
        userName: "Sergei",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        usersList: users.map( user =>  new FriendItem({
            ...user,
            imgPhoto: new ImageClass(user.imgPhoto)
        })),
        buttonBack: new Button({
            text: "<-- Back",
            className: "btn_back"
        }),
        pages: [1,2,3,4,5]

    })
}

export const listOfChatsPage = new ListOfChatsPage(state)



render(".app", listOfChatsPage);
