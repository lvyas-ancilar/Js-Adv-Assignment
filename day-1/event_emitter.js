class MyEventEmitter {
  constructor() {
    this.events = {}; 
  }

  // on basically listener ko add karne ki liye use karate hauuiii
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = []; 
    }
    this.events[eventName].push(listener); 
  }

  // emit for listening the event 
  emit(eventName, ...args) {
    const listeners = this.events[eventName];
    if (!listeners) return; 

    for (const listener of listeners) {
      listener(...args); 
    }
  }

  //  Event listener hataane ke liye
  off(eventName, listenerToRemove) {
    const listeners = this.events[eventName];
    if (!listeners) return;

    const newListeners = [];
    for (const listener of listeners) {
      if (listener !== listenerToRemove) {
        newListeners.push(listener); // filtering which we want to have 
      }
    }

    this.events[eventName] = newListeners;
  }
}


const ee = new MyEventEmitter();

function greet(name){
    console.log("hello " + name)
}

ee.on("greet" , greet)

ee.emit("greet" , "lavesh")

ee.off("greet" , greet)