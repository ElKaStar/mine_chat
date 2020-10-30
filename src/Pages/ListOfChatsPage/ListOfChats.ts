
import {Block} from "../../components/utils/Block.js";
import {render} from "../../components/utils/renderDOM.js";
import Header from "../../components/Header/Header.js";
import ImageClass from "../../components/image/image.js";
import {FriendList} from "../../components/FriendList/friendList.js";
import {Button} from "../../components/button/button.js";
import {FriendItem} from "../../components/friendItem/friend.js";
import {UsersBlock} from "../../components/usersPart/usersPart.js";



const template =
    `<div class="{{ className }}">
    {{{ header }}}
    <main id="{{ idMain }}" class="{{ classMain }}"">
        {{{ friendsList }}}
        {{{ usersPart }}}
    </main>
</div>`

export class ListOfChatsPage extends Block {
    constructor(props: object) {
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
            usersPart: this.props.usersPart.render()
        });
        console.log('arrFriends',this.props)
        return res;
    }
}


export const listOfChatsPage = new ListOfChatsPage({
    className: "site",
    header: new Header({
        className: 'masthead grass',
        child: 'MINE CHAT',
        imgLogo: new ImageClass({
            className: "avatar",
            alt: "userLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        refToPage: "/profile",
        refToSignInSignOut: "/",
        MenuItem: "Profile",
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
    usersPart: new UsersBlock({
        className: "messages",
        userName: "Sergei",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        usersList: [
            new FriendItem({
                className: "user_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Katya",
                userStatus: "I am happy too"
            }),
            new FriendItem({
                className: "user_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Katya",
                userStatus: "I am happy too"
            }),
            new FriendItem({
                className: "user_item",
                imgPhoto: new ImageClass({
                    className: "userLogo",
                    alt: "userLogo",
                    imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
                }),
                userName: "Katya",
                userStatus: "I am happy too"
            })
        ],
        buttonBack: new Button({
            child: "<-- Back",
            className: "btn_back"
        }),
        pages: [1,2,3,4,5]

    })
})



render(".app", listOfChatsPage);
