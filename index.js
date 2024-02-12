// Function to update the countdown timer
function updateCountdown() {
  // Set the target countdown time (24-hour format)
  var targetHour = 24; // Change this to your desired hour (0-23)

  // Get the current date and time
  var now = new Date();
  var currentHour = now.getHours();
  var currentMinute = now.getMinutes();
  var currentSecond = now.getSeconds();

  // Calculate the remaining time until the target hour
  var remainingHours, remainingMinutes, remainingSeconds;

  if (currentHour < targetHour) {
    remainingHours = targetHour - currentHour - 1;
    remainingMinutes = 59 - currentMinute;
    remainingSeconds = 59 - currentSecond;
  } else if (currentHour > targetHour) {
    remainingHours = 24 - currentHour + targetHour - 1;
    remainingMinutes = 59 - currentMinute;
    remainingSeconds = 59 - currentSecond;
  } else {
    remainingHours = 0;
    remainingMinutes = 59 - currentMinute;
    remainingSeconds = 59 - currentSecond;
  }

  // Format the remaining time
  var hoursText = remainingHours < 10 ? "0" + remainingHours : remainingHours;
  var minutesText =
    remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
  var secondsText =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  // Display the remaining time
  var countdownText = hoursText + ":" + minutesText + ":" + secondsText;
  document.getElementById("countdownTimer").innerHTML = countdownText;
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);
