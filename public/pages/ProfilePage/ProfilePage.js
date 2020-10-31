import { Block } from "../../components/utils/Block.js";
import { render } from "../../components/utils/renderDOM.js";
import Header from "../../components/Header/Header.js";
import ImageClass from "../../components/image/image.js";
import { FriendList } from "../../components/FriendList/friendList.js";
import { Button } from "../../components/button/button.js";
import { FriendItem } from "../../components/friendItem/friend.js";
import { ProfilePart } from "../../components/profilePart/profilePart.js";
import { UserDetail } from "../../components/userDetails/userDetail.js";
import { Input } from "../../components/input/input.js";
import { template } from "./ProfilePageType.js";
export class ProfilePage extends Block {
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
            profile: this.props.profile.render()
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
];
const detailList = [
    {
        title: "First name",
        info: "Katya"
    },
    {
        title: "Second name",
        info: "Second name"
    },
    {
        title: "Display name",
        info: "Katya"
    },
    {
        title: "Login",
        info: "login"
    },
    {
        title: "Email",
        info: "Katya@yandex.ru"
    },
    {
        title: "Phone",
        info: "8900-000-000"
    },
    {
        title: "Status",
        info: "My status"
    }
];
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
        friends: friends.map(friend => new FriendItem(Object.assign(Object.assign({}, friend), { imgPhoto: new ImageClass(friend.imgPhoto) })))
    }),
    profile: new ProfilePart({
        className: "messages",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        detailsList: detailList.map(item => new UserDetail(item)),
        buttonBack: new Button({
            text: "<-- Back",
            className: "btn_back"
        }),
        buttonEditProfile: new Button({
            text: "Edit password",
            className: "btn_edit_password"
        }),
        buttonChangePhoto: new Button({
            text: "Change photo",
            className: "btn_change_photo"
        }),
        buttonChangePassword: new Button({
            text: "Change password",
            className: "btn_change_password"
        }),
        inputChangePassword: new Input({
            className: "new_password",
            placeHolder: "Enter new password",
            type: "pass",
            name: "new_password",
            labelText: ""
        }),
        inputRepeatPassword: new Input({
            className: "repeat_password",
            placeHolder: "Repeat new password",
            type: "pass",
            name: "repeat_password",
            labelText: ""
        })
    })
};
export const profilePage = new ProfilePage(state);
render(".app", profilePage);
//# sourceMappingURL=ProfilePage.js.map