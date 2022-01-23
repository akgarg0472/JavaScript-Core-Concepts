// own implementation of bind function

const user = {
  firstName: "Akhilesh",
  lastName: "Garg",
};

const print = function (msg, msg1) {
  console.log(`${this.firstName} ${this.lastName}: ${msg}, ${msg1}`);
};

Function.prototype.customBind = function (...args) {
  const referenceObject = this; // this points to print()
  const params = args.slice(1); // get all params excluding the first object reference

  return function (...args1) {
    referenceObject.apply(args[0], [...params, ...args1]);
  };
};

const customPrintName = print.customBind(user, "Hello JavaScript", "Hi boi");
customPrintName();
