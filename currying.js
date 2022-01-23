/*
currying is the technique to transform a function with multiple arguments into a sequence of nested functions.
In other words, we can say that function currying is a technique to break down a function taking multiple arguments into a series of function taking single argument....

example (using closure): 

    function addition(a, b) {
        return a + b;
    }

    console.log(addition(10, 20));
    output: 30

    ============================================

    function addition(a) {
        return function addition1(b) {
            return a + b;
        }
    }

    console.log(addition(10)(20));
    output: 30
*/

/* In following example, reducing number of argument using bind function */
const multiplyBind = function (x, y) {
  console.log(`${y} * ${x} = ${x * y}`);
};

const multiplyByTwoUsingBind = multiplyBind.bind(this, 2);
const multiplyByThreeUsingBind = multiplyBind.bind(this, 3);
const multiplyByFourUsingBind = multiplyBind.bind(this, 4);
const multiplyByFiveUsingBind = multiplyBind.bind(this, 5);

multiplyByTwoUsingBind(5);
multiplyByThreeUsingBind(5);
multiplyByFourUsingBind(5);
multiplyByFiveUsingBind(5);

console.log("============");

/* In following example, reducing number of argument using closures */
const multiplyClosure = function (a) {
  return function (b) {
    console.log(`${b} * ${a} = ${a * b}`);
  };
};

const multiplyByTwoUsingClosure = multiplyClosure(2);
const multiplyByThreeUsingClosure = multiplyClosure(3);
const multiplyByFourUsingClosure = multiplyClosure(4);
const multiplyByFiveUsingClosure = multiplyClosure(5);

multiplyByTwoUsingClosure(5);
multiplyByThreeUsingClosure(5);
multiplyByFourUsingClosure(5);
multiplyByFiveUsingClosure(5);
