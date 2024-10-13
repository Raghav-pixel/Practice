class EventEmitter {
    constructor() {
        this.events = [];
    }

    on(event, listener) {
        if(!this.events[event]) {
            this.events[event] = [];
        } 
        this.events[event].push(listener);
    }

    off(event, listenerToRemove) {
        if(!this.events[event]) return;
        this.events[event] = this.events[event].filter((li) => li !== listenerToRemove);
    }

    emit(event, ...args) {
        if(!this.events[event]) return;
        this.events[event].forEach((listener) => {
            listener(...args);
        });
    }
}

// Example
// const emitter = new EventEmitter();

// // Create a listener for the 'greet' event
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// // Register the listener
// emitter.on('greet', sayHello);

// // Emit the 'greet' event
// emitter.emit('greet', 'Alice'); // Output: Hello, Alice!

// // Remove the listener
// emitter.off('greet', sayHello);

// // Emit the event again (no output since the listener was removed)
// emitter.emit('greet', 'Bob');
