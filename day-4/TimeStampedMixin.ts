type Constructor<T = {}> = new (...args: any[]) => T;    // dynamic class constructor
function timeStampedMixin<T extends Constructor>(Base: T) {  // mixin basically ek type ka fn hai jo recieve karta hai class 
    // ko as a input and it also returns class with extended fncnalities
  return class extends Base {
    createdAt: Date;
    updatedAt: Date;
    constructor(...args: any[]) {
      super(...args);
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
    updateTime() {
      this.updatedAt = new Date();
    }
  };
}
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const User = timeStampedMixin(Person);
const user1 = new User("leo");
console.log("Username: ", user1.name);
console.log("Created at: ", user1.createdAt);
console.log("Updated at: ", user1.updatedAt);
// Updating user using time stamping 
setTimeout(() => {
  user1.name = "Lavesh";
  user1.updateTime();
  console.log(`Username: ${user1.name} updated at ${user1.updatedAt}`);
}, 2000);
