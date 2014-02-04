$(document).ready(function() {
  $(document).keyup(function(key) {
    if(key.keyCode === 81){
      raceAhead("car1", 10)
    }
    if(key.keyCode === 80){
      raceAhead("car2", 10)
    }
  });
});


function raceAhead (car, position) {
  var player = document.getElementsByClassName(car)
  var currentMargin = getComputedStyle(player[0]).marginLeft
  var newMargin = (position + parseInt(currentMargin)).toString() + "px"
  player[0].style.marginLeft = newMargin
};
