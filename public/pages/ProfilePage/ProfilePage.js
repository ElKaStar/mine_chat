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
const template = `<div class="{{ className }}">
    {{{ header }}}
    <main id="{{ idMain }}" class="{{ classMain }}"">
        {{{ friendsList }}}
        {{{ profile }}}
    </main>
</div>`;
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
        console.log('arrFriends', this.props);
        return res;
    }
}
export const profilePage = new ProfilePage({
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
    profile: new ProfilePart({
        className: "messages",
        userPhoto: new ImageClass({
            className: "friendLogo",
            alt: "friendLogo",
            imageSrc: "https://yt3.ggpht.com/a/AATXAJySmDAYcmdH8pi8cja3bKSohOt77cfR6jH2Pg=s900-c-k-c0xffffffff-no-rj-mo"
        }),
        detailsList: [
            new UserDetail({
                title: "First name",
                info: "Katya"
            }),
            new UserDetail({
                title: "Second name",
                info: "Second name"
            }),
            new UserDetail({
                title: "Display name",
                info: "Katya"
            }),
            new UserDetail({
                title: "Login",
                info: "login"
            }),
            new UserDetail({
                title: "Email",
                info: "Katya@yandex.ru"
            }),
            new UserDetail({
                title: "Phone",
                info: "8900-000-000"
            }),
            new UserDetail({
                title: "Status",
                info: "My status"
            })
        ],
        buttonBack: new Button({
            child: "<-- Back",
            className: "btn_back"
        }),
        buttonEditProfile: new Button({
            child: "Edit password",
            className: "btn_edit_password"
        }),
        buttonChangePhoto: new Button({
            child: "Change photo",
            className: "btn_change_photo"
        }),
        buttonChangePassword: new Button({
            child: "Change password",
            className: "btn_change_password"
        }),
        inputChangePassword: new Input({
            className: "new_password",
            id: "new_password",
            placeHolder: "Enter new password",
            type: "pass",
            name: "new_password"
        }),
        inputRepeatPassword: new Input({
            className: "repeat_password",
            id: "repeat_password",
            placeHolder: "Repeat new password",
            type: "pass",
            name: "repeat_password"
        })
    })
});
render(".app", profilePage);
//# sourceMappingURL=ProfilePage.js.map