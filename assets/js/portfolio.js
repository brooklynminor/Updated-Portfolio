
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.navbar-toggler-icon')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function noteTaker() {
  location.replace("https://github.com/brooklynminor/Note-Taker.git")
}
function weatherApp() {
  location.replace("https://github.com/brooklynminor/Homework6-WeatherApp.git")
}
function quiz() {
  location.replace("https://github.com/brooklynminor/Quiz.git")
}
function progressiveBudget() {
  location.replace("https://github.com/brooklynminor/Progressive-Budget.git")
}
function jobR() {
  location.replace("https://github.com/vicscherman/project1.git")
}
function chatterLadder() {
  location.replace("https://github.com/skar45/Project-2.git")
}
