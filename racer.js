$(document).ready(function(){
  $(document).on('keyup', function(event){
    if (event.which == 80) {
      movePlayer(1);
    }
    else if (event.which == 81) {
      movePlayer(2);
    }
    }
    )
});

var movePlayer = function(playerNum) {
  current_cell = $('#player'+playerNum+'_track .active');
  next_cell = current_cell.next();
  current_cell.removeClass('active');
  next_cell.addClass('active');
}