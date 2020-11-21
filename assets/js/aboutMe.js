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
      // functions from line 172-180 allows user to click link that will redirect them to listed page
      function myLinkedIn() {
    location.replace("https://www.linkedin.com/in/brooklyn-minor-742245109/")
  }
     function myGitHub() {
    location.replace("https://github.com/brooklynminor")
  }
