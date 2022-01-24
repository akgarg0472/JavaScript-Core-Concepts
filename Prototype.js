/*
    - Everything in JavaScript is an object. 
    - Whenever we define something in JS, JS engine automaticaly attach an object to our values which can be accessed by using "__proto__" on our object or variable.
    - Prototype is a mechanism by which JavaScript object inherit features and properties from one another.
    
    - Root prototype for anything in JavaScript is Object.prototype
    - Prototype for a function is Function.prototype whose prototype is again Object.prototype
    - Prototype for an array is Array.Prototype whose prototype is again Object.prototype

    We can change the prototype of an object by usign callingObject.__proto__ = newPrototypeForCallingObject (❌ not recommended ❌)
    
    If we want to add something in the prototype then we can use PrototypeType.prototype.newPrototypePropertyName = value(could be a function)
    Syntax:
        Function.prototype.printFunction = function(){
            // logic to print the function
        }
*/

const arr = [1, 2, 3, 4, 5];
let prototype = arr.__proto__;

// while (prototype) {
//   console.log(prototype);
//   prototype = prototype.__proto__;
// }

const user = {
  firstName: "Akhilesh",
  lastName: "Garg",
  age: 21,
  occupation: "Student",
};

// changing implementation of toString() method of JS object prototype
Object.prototype.toString = function () {
  return `${this.firstName} ${this.lastName} is a ${this.occupation} of ${this.age} years old`;
};

console.log(user);
console.log(user.__proto__);
console.log(user.toString()); // by default returns prototype
