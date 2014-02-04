var movePlayer = function(playerNum) {
  current_cell = $('#player'+playerNum+'_track .active');
  next_cell = current_cell.next();
  current_cell.removeClass('active');
  next_cell.addClass('active');
}