import {IBlock} from "./Block";


export type validationType = {
    email? : boolean,
    required: boolean,
    minLength?: number

}
export type propsButtonType = {
    text: string,
    type?: string,
    className?: string
}

export type propsFriendType = {
    className: string,
    imgPhoto: IBlock,
    userName: string,
    userStatus: string
}

export type propsFriendListType = {
    className: string,
    title: string,
    friends: Array<IBlock>
}

export type propsImgPhotoType = {
    className: string,
    imageSrc: string,
    alt: string
}

export type propsInputType = {
    className: string,
    labelText: string,
    placeHolder: string,
    type: string,
    name: string


}
export type propsHeaderType = {
    className: string,
    isAddMenu: boolean,
    imgLogo: IBlock,
    text: string,
    refToPage?: string,
    MenuItem?: string,
    refToSignInSignOut?: string,
    SignInSignOut?: string
}
export type propsLoginFormType = {
    className: string,
    formTitle: string,
    inputLogin: IBlock,
    inputPassword: IBlock,
    button: IBlock,
    classNameFP: string,
    forgotPassword: string
}
export type propsMessageType = {
    className: string,
    friendName: string,
    message: string
}
export type propsMessagesType = {
    className: string,
    userName: string,
    userPhoto: IBlock,
    messagesList: Array<IBlock>,
    buttonBack: IBlock,
    buttonSendMessage: IBlock
}
export type propsProfilePartType = {
    className: string,
    userPhoto: IBlock,
    detailsList: Array<IBlock>,
    buttonBack: IBlock,
    buttonEditProfile: IBlock,
    buttonChangePhoto: IBlock,
    buttonChangePassword: IBlock,
    inputChangePassword: IBlock,
    inputRepeatPassword: IBlock
}
export type propsListOfChatsType = {
    className: string,
    header: IBlock,
    classMain: string,
    friendsList: IBlock,
    usersPart: IBlock
}

export type propsUserDetailsType = {
    title: string,
    info: string
}

export type propsRegistrationFormType = {
    className: string,
    formTitle: string,
    firstName: IBlock,
    secondName: IBlock,
    email: IBlock,
    phone: IBlock,
    inputLogin: IBlock,
    inputPassword: IBlock,
    button: IBlock
}
export type propsUserPartType = {
    className: string,
    userName: string,
    userPhoto: IBlock,
    usersList: Array<IBlock>,
    buttonBack: IBlock,
    pages: number []
}

export type formControlsType = {
    [index: string]: controlsType
}

export type controlsType = {
    valid: boolean,
    touched: boolean,
    validation?: validationType | {},
    value: string,
    type: string,
    name: string,
    errorMessage: string
}



export type metaType = {
    tagName: string,
    props: Object | null
}

export type propsType = {
    [index: string]: any
}




export type ListenersType = {
    [index: string]: Function []
}

export type EventType = {
    target: TargetType,
    preventDefault() : Function
}

export type TargetType = {
    value: string
    name: string
}

export type propsLoginPageType = {
    className: string,
    handlers: {
        [index: string]: Function
    },
    formControls: formControlsType,
    header: IBlock,
    loginForm: IBlock,
    classMain: string,
    Friends: string,
    imageCriper: IBlock
}
export type propsMessagesPageType = {
    className: string,
    header: IBlock,
    classMain: string,
    friendsList: IBlock,
    messagesPart: IBlock
}

export type propsProfilePageType = {
    className: string,
    header: IBlock,
    classMain: string,
    friendsList: IBlock,
    profile: IBlock
}

export type propsRegistrationPageType = {
    className: string,
    handlers: {
        [index: string]: Function
    },
    classMain: string,
    header: IBlock,
    registrationForm: IBlock,
    regCriper: string
}
