document.addEventListener("DOMContentLoaded", function () {
  function checkDate() {
    var currentDate = new Date();
    var unlockDate = new Date("2025-04-04T00:00:00");

    var card = document.querySelector(".card");
    var timer = document.querySelector(".timer");

    card.style.display = "none";

    if (currentDate >= unlockDate) {
      card.style.display = "block";      
      timer.style.display = "none";
    } else {
      timer.style.display = "block";
      
      var countDownDate = unlockDate.getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }

  checkDate();
  setInterval(checkDate, 1000);
});
