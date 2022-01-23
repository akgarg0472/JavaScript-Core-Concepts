// Debouncing function is the function which waits for certain amount of time before running again.

const input = document.querySelector("#search");

const getData = () => {
  console.log("Fetching data from API");
};

const fetchData = (task, delay) => {
  return function () {
    setTimeout(() => {
      task();
    }, delay);
  };
};

const executeFunction = fetchData(getData, 1000);

input.addEventListener("keyup", executeFunction);
