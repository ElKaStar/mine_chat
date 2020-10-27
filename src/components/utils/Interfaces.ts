interface IEvent {
    preventDefault(): object,
    target: ITarget


}

interface ITarget {
    name: keyof ITarget
    value: keyof ITarget
}

interface INewProps {
    name: IName,
    touched: IName,
    value: IName
}
interface  IName {
    touched: boolean,
    value: string,
    validation: object,
    valid: boolean,
    errorMessage: string
}

interface IListeners {
   [event: string]: Function[]
}

interface IEventBus extends Object {
    on: Function,
    emit: Function
}

interface IMeta extends Object{
    tagName: keyof IMeta,
    props: Object

}

