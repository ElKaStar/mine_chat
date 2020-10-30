

export type validationType = {
    email? : boolean,
    required: boolean,
    minLength?: number

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
