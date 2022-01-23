// here we can see that we are repeating ourself by declaring printFullName function in both objects
// we can avoid this by using bind()
// bind method binds the function to calling object by creating a copy of the function and attaching with the calling object and returns the attached method
// bind method doesn't call immediately, it can be invoked later
// syntax of using bind method is:
/*
    const newFunction = functionToBound.bind(object, ...args)
    newFunction()
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

const userName = printFullName.bind(user, "user");
userName();

const athleteName = printFullName.bind(athlete, "athlete");
athleteName();
