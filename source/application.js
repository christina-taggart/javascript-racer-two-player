$(document).ready(function() {
  $(document).keyup(function(key) {
    if (carOne.winning === false && carTwo.winning === false) {
      if (key.keyCode === 81){
        raceAhead(carOne, 20)
      }
      if (key.keyCode === 80){
        raceAhead(carTwo, 20)
      }
    }
      if (carOne.margin === 1000){
        carOne.winning = true,
        winCondition(carOne)
      }
      if (carTwo.margin === 1000){
        carTwo.winning = true,
        winCondition(carTwo)
      }
  });
});

var carOne = {
  divName: "car1",
  carName: "Benz",
  margin: 0,
  winning: false
};

var carTwo = {
  divName: "car2",
  carName: "MegaTruck",
  margin: 0,
  winning: false
};


function raceAhead (car, position) {
  var player = document.getElementsByClassName(car.divName)
  var currentMargin = getComputedStyle(player[0]).marginLeft
  var newMargin = (position + parseInt(currentMargin)).toString() + "px"
  player[0].style.marginLeft = newMargin
  car.margin += position
};

function winCondition(victor) {
  document.getElementById("winner").style.display = "block"
  document.getElementById("winner_text").innerHTML = victor.carName + " wins! Click button to play again!"
};

function reset() {
  location.reload();
}
// todo
// win condition :
// if currentMargin > x
// disable racing
// present :
// restart option
// hidden button
// reveal on win condition
// resets margins
