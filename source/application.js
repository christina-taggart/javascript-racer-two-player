



function raceAhead (car, position) {
  var player = document.getElementsByClassName(car)
  var currentMargin = getComputedStyle(player[0]).marginLeft
  console.log(currentMargin)
  var newMargin = (position + parseInt(currentMargin)).toString() + "px"
  console.log(position)
  console.log(newMargin)
  player[0].style.marginLeft = newMargin
};
