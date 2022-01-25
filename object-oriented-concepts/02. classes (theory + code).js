/*
    → Class is defined as a blueprint for the object. Class defines how an object should look like.
    → Class contains properties (variables) and behavious (methods) who are the building block for any object.
    → 'class' keyword is used to create a class
*/

// defining a class
class Programming {
  constructor(name) {
    this.name = name;
  }

  getInfo = function () {
    console.log(`Name of programming language is: ${this.name}`);
  };

  setName = function (name) {
    this.name = name;
  };

  getName = function () {
    return this.name;
  };
}

const programming = new Programming("JavaScript");
programming.getInfo();
console.log(programming.getName());
programming.setName("Java");
console.log(programming.getName());

console.log("==========================================================");

/*
    → Here, we have a  problem that we can access all properties directly. There is no mechanism to protect these properties from outside world.
    → To fix this problem, we can make property(s) or method(s) private by adding '#' before their declaration.

    → We can access private field or method using dot (.) notation along with '#' otherwise it will results in error.
    → We can access private members only within class, they can't be accessed from outside class body.
*/

// making properties private in class
class PrivateProperty {
  #name;
  #age;

  constructor(name = "", age = 0) {
    this.#name = name;
    this.#age = age;
  }

  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    this.#age = age;
  }

  getInfo() {
    return `${this.#name} is ${this.#age} years old!!`;
  }
}

const privateProperty = new PrivateProperty();
privateProperty.setName("JavaScript");
privateProperty.setAge(21);
console.log(privateProperty.getInfo());
console.log("==========================================================");
