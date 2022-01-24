const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

// using fetch API
const fetchData = async () => {
  const options = {};
  const data = await (await fetch(API_URL, options)).json();
  console.log(data);
};
fetchData();

// using Vanilla JS
const fetchDataAjax = () => {
  const request = new XMLHttpRequest(); // creates an XHR Request
  request.open("GET", API_URL); // creates a connection with remote server using specified method
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // telling remote server that this request is an AJAX request
  request.responseType = "json"; // setting the type of the data received from the server

  request.onload = function () {
    const status = this.status;
    const response = this.response;

    if (status === 200) {
      console.log(response);
    } else {
      console.log("Error executing network call");
    }
  };

  request.ontimeout = function () {
    console.log("Request timed out");
  };

  request.send(); // actually sends the HTTP request
};
fetchDataAjax();
