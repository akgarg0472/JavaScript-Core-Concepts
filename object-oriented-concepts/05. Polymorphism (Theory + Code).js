/*
    → Polymorphism is defined as the ability to take on multiple forms.

    → Types of polymorphism:
        - Ad-hoc polymorphism
        - Parametric polymorphism
        - Subtype polymorphism

    → Adhoc Polymorphism: Change something from one form to other form on the spot without any previous planning. It exhibit different behavior according to the perspective of view. Adhoc polymorphism has following types:
        - Operator overloading (example: '+' operator in JS)
        - Function overloading (not supported in JS since we can't have multiple functions having same name)
        - Coercion polymorphism (conversion of one data type to another. example: if-else condition using string)

    → Parametric polymorphism: polymorphism that is related to the parameters. It deals with generic functions and generic data types while still maintaining static type safety. Parametric Polymorphism has two parts:
        - Data that can contain many types of data (Example: JS Object)
        - Functions that can work with many types of data (Example: map() method, forEach() method, method printing all of it's params)

    → Subtype polymorphism: Subtype Polymorphism involves creating derivative objects from a parent object. It is about implementing interfaces or substituting method implementations. Subtype Polymorphism has following types:
        - Method overriding

*/

console.log("========================================");

// Adhoc Polymorphism
const username = "Akhilesh Garg";
console.log("Hello there: " + username);
console.log(10 + 20);
if (username) {
  console.log(`Username is ${username}`);
}

console.log("========================================");

// Parametric Polymorphism
const user = {
  name: "Akhilesh Garg",
  age: 21,
  married: false,
};
const arr = ["username", false, "password", 21];
console.log(user);
console.log(arr);
arr.forEach((val) => console.log(val));

console.log("========================================");

class User {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class Teacher extends User {
  #type;

  constructor(name, age, type) {
    super(name, age);
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  getInfo() {
    return `${super.name} is teacher of age ${super.age} of ${
      this.#type
    } department.`;
  }
}

class Student extends User {
  #rollno;

  constructor(name, age, rollno) {
    super(name, age);
    this.#rollno = rollno;
  }

  get rollno() {
    return this.#rollno;
  }

  getInfo() {
    return `${super.name} is student of age ${super.age} having roll no ${
      this.#rollno
    }.`;
  }
}

const teacher = new Teacher("Kaushik", 35, "CSE");
console.log(teacher.getInfo());

const student = new Student("Akhilesh", 21, 8);
console.log(student.getInfo());
