// Document ready:
$(function() {

  // Put player ships in active spaces
  placePlayer('player-1');
  placePlayer('player-2');

});

var placePlayer = function(player) {
  $("#" + player + "-track .active").append("<img src='images/" + player + ".png'/>");
}