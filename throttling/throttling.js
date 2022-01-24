/*
    Throttling is an optimization technique which is used to limit the execution of a piece of code of event handler for a given time interval. 
    In other words, Throttling is an optimization technique in which, no matter how many times the user fires the event, the attached event handler function will be executed only once in a given time interval.

    For example, if we have a button who makes an expensive API call on each click, then we would want to limit the API calls to improve the performance of our application. So we will limit the number of API calls, lets say atmost 2 API calls in 5 minutes time duration. Real life example of throtting is the Youtube web application who refresh the subscription content only one time in 5 minutes (approx) on subscription tab click.

*/

// Actual hypothetical function which makes an API call
const fetchData = (args) => {
  console.log(`Expensive API call Made: ${args}`);
};

const throttleDataFetch = (fun, limit) => {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;
      fun();

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const button = document
  .getElementById("btn")
  .addEventListener("click", throttleDataFetch(fetchData, 2000));
