
class EventBus {
        listeners: IListeners

    constructor() {
        this.listeners = {};
    }

    on(event: event, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
            this.listeners[event].push(callback);
        }


    off(event: event, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: Function) => listener !== callback
        );
    }

    emit(event: event, ...args :any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener :Function) {
            listener(...args);
        });
    }
}
export default EventBus
