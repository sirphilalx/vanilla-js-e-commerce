// Set the date and time for the countdown
var countdownDate = new Date("jan 1, 2025 00:00:00").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining until the countdown date
  var timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the DOM
  var countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML =
    days +
    "d " +
    ": " +
    hours +
    "h " +
    ": " +
    minutes +
    "m " +
    ": " +
    seconds +
    "s ";

  // If the countdown is over, stop the countdown
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "EXPIRED";
  }
}, 1000); // Update every second
