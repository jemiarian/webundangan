// script.js
// Countdown Timer
const countDownDate = new Date("Dec 25, 2025 10:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Acara Dimulai!";
  }
}, 1000);

// RSVP Function
function showMessage() {
  const message = document.getElementById("rsvp-message");
  message.style.display = "block";
}
