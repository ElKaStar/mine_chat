import type {ListenersType} from "./Types";


export interface IEventBus {
    listeners: ListenersType,
    on: (event: string, callback: Function) => void,
    off: (event: string, callback: Function) => void,
    emit: (event: string, ...args :any) => void
}



class EventBus implements IEventBus {
        listeners: ListenersType

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
            this.listeners[event].push(callback);
        }


    off(event: string, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    emit(event: string, ...args :any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener :Function) {
            listener(...args);
        });
    }
}
export default EventBus
