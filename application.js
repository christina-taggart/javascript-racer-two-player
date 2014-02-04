// Document Ready:
$(function() {

  // Put player ships in active spaces
  placePlayer1();
  placePlayer2();

});


var update_player_position = function(player, space) {

}

var placePlayer1 = function() {
    $('#player-1-track .active').append("<img src='images/rocket_usa.png'/>");
  }

var placePlayer2 = function() {
  $('#player-2-track .active').append("<img src='images/rocket_martian.png'/>");
}