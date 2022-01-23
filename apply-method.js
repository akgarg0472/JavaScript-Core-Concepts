// here we can see that we are repeating ourself by declaring printFullName function in both objects
// we can avoid this by using apply() which is also known as function borrowing
// apply method is same as call method but only different in the syntax
// syntax of apply method is:
/*
      originalObject.functionToCall.call(objectOnWhichFunctionIsToCall, [...args])
  */

const user = {
  firstName: "Akhilesh",
  lastName: "Garg",
};

const athlete = {
  firstName: "Virat",
  lastName: "Kohli",
};

const printFullName = function (arg) {
  console.log(`${this.firstName} ${this.lastName} : ${arg}`);
};

// printFullName.apply(user, "User");  error because not passing array as argument
printFullName.apply(athlete, ["Athlete"]);
