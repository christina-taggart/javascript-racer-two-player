$(document).ready(function() {
  var update_player_position = function(player, newPosition) {
  var whichCell = document.querySelector(".racer_table").rows[player-1].cells[newPosition];
  var whichPlayer = document.getElementById(player).querySelector(".active");
    $(whichPlayer).removeClass("active");
    $(whichCell).addClass("active");
  }

  var generateRandomNumber = function() {
    return Math.floor((Math.random()*4)+1);
  }
  var gameOver = false;
  var gameStarted = false;
  var currentPositionPlayerOne = 0;
  var currentPositionPlayerTwo = 0;
  $(document).on('keyup', function() {
    gameStarted = true;
    currentPositionPlayerOne = currentPositionPlayerOne + generateRandomNumber();
    currentPositionPlayerTwo = currentPositionPlayerTwo + generateRandomNumber();
    console.log(currentPositionPlayerOne);
    update_player_position(1, currentPositionPlayerOne);
    update_player_position(2, currentPositionPlayerTwo);
    if (currentPositionPlayerOne>=20||currentPositionPlayerTwo>=20) {
      gameOver = true;
      alert("Omg!  Somebody won!");
      location.reload();
    }
    else {
      gameOver = false;
    }
  });
});