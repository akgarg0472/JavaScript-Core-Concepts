/*
    → Inheritance is defined as the nechanism to acquire/obtain properties and behaviour from another class which is already defined.
    → Class whose members are inherited is called as Base/Parent class and class that inherits these members is known as child class.
    → Inheritance follows 'is-A' relationship.
    → There are multiple types of inheritance:
        - Single Inheritance
        - Multilevel inheritance
        - Multiple inheritance
        - Hierachical inheritance
        - Hybrid inheritance
    → JS has following types of inheritance:
      - Prototype inheritance
      - Pseudoclassical inheritance
      - Functional inheritance
*/

// Base class
class Parent {
  #count;

  constructor(count = 0) {
    this.#count = count;
  }

  getCount() {
    return this.#count;
  }

  setCount(count) {
    this.#count = count;
  }
}

// Child class
class Child extends Parent {
  #name;

  constructor(name) {
    super(23);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    console.log("Setter method called");
    this.#name = name;
  }
}

const child = new Child("Rishi");
console.log(child.getName());
console.log(child.getCount()); // calling parent class method
