console.log('main.js is connected!');

/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/

fetch('http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&appid=f789ebd868b620fa978ed20f8e430f6e')
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    document.querySelector("#test").append(response.name);
  });