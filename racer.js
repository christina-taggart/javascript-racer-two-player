$(document).ready(function(){
  $(document).on('keyup', function(event){
    if (event.which == 80) {
      playGame(1);
    }
    else if (event.which == 81) {
      playGame(2);
    }
    }
    )
});

var playGame = function(playerNum){
  movePlayer(playerNum);
  checkWinner(playerNum);
}

var movePlayer = function(playerNum) {
  current_cell = $('#player'+playerNum+'_track .active');
  next_cell = current_cell.next();
  current_cell.removeClass('active');
  next_cell.addClass('active');
}

var checkWinner = function(playerNum) {
  if ($('#player'+playerNum+'_track .active').next().length==0){
    var replay = window.confirm("Player "+playerNum+" wins! Play again?");
    if (replay)
    {
      location.reload(true)
    }
  }
}