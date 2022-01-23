// Debouncing function is the function which waits for certain amount of time before running again.
// One of the most common example of debouncing is search box of e-Commerce platforms which makes an API call after certain period of time only, not for each character input
// Debouncing is very useful and handy when it comes to the performance optimization of our web application

const search = document.querySelector("#search");
search.addEventListener("keyup", debounceNetworkCall(getData, 1000));

function debounceNetworkCall(fun, delay) {
  let timeout;

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      return fun();
    }, delay);
  };
}

// function which make hypothetical call to API
function getData() {
  console.log(`Data fetched from API is: ${search.value}`);
}
