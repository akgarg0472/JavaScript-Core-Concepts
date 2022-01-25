/*
    → Everything in JavaScript is object whether it is a variable, function or an object in itself😅.
    → Anything having some properties or behavior is known as object.

    → We can create object in JS using two ways:
        - {} is called as onject literal. We can store key-value pair inside this pair
        - using "new" keyword with the class name (constructor)

    → We use dot (.) notation to access property or method of an object.
*/

/*
    Defining object using object literal. Here, 
        - name, nickname, age are properties (variables).
        - getInfo() is a method (function).
*/

const object = {
  name: "JavaScript",
  nickname: "JS",
  age: 27,
  getInfo: function () {
    console.log(
      `Name: ${this.name}\nNickname: ${this.nickname}\nAge: ${this.age}`
    );
  },
};

object.getInfo(); // accessing the getInfo() function of object using dot (.) notation
console.log(object.name);

// we can also access the value of a property using array like syntax (not recommended)
console.log(object["name"]);

// ==============================================================================================
