const user = {
  firstName: "Akhilesh",
  lastName: "Garg",
  printFullName: function (arg) {
    console.log(`${this.firstName} ${this.lastName} : ${arg}`);
  },
};

const athlete = {
  firstName: "Virat",
  lastName: "Kohli",
  //   printFullName: function () {
  //     console.log(`${this.firstName} ${this.lastName}`);
  //   },
};

user.printFullName("user");
// athlete.printFullName(); // error

// here we can see that we are repeating ourself by declaring printFullName function in both objects
// we can avoid this by using call() which is also known as function borrowing
// we can borrow functions from other object(s) and use data of our object (calling object in this case)
// syntax of using call method is:
/*
    originalObject.functionToCall.call(objectOnWhichFunctionIsToCall, ...args)
*/

user.printFullName.call(athlete, "athlete");
