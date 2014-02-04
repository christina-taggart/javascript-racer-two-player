// Document ready:
$(function() {

  // Put player ships in active spaces
  placePlayer('player-1');
  placePlayer('player-2');

});

var updatePlayerPosition = function(player, space) {
  removePlayer(player);
  $("#" + player + "-track #space-" + space.toString()).addClass('active');
  placePlayer(player);
}

var playerPosition = function(player) {
  return $("#" + player + "-track .active").attr('id').slice(-1)
}

var placePlayer = function(player) {
  $("#" + player + "-track .active").append("<img src='images/" + player + ".png'/>");
}

var removePlayer = function(player) {
  $("#" + player + "-track .active").find('img').remove();
  $("#" + player + "-track .active").removeClass('active');
}