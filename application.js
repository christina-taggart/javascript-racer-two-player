// Document ready:
$(function() {

  // Put player ships in starting spaces
  placePlayer('player-1');
  placePlayer('player-2');


  // Keyup event handler: players advance on certain keyups
  $(document).on('keyup', function(event) {
    // keyCode 80 = p
    if (event.keyCode === 80) {

    }
    // keyCode 81 = q
    if (event.keyCode === 81) {

    }
  });

});

var updatePlayerPosition = function(player, space) {
  removePlayer(player);
  $("#" + player + "-track #space-" + space.toString()).addClass('active');
  placePlayer(player);
}

var advancePlayer = function(player) {
  space = (playerPosition(player) + 1);
  console.log(space);
  updatePlayerPosition(player, space);
}

var playerPosition = function(player) {
  return parseInt($("#" + player + "-track .active").attr('id').slice(-1));
}

var placePlayer = function(player) {
  $("#" + player + "-track .active").append("<img src='images/" + player + ".png'/>");
}

var removePlayer = function(player) {
  $("#" + player + "-track .active").find('img').remove();
  $("#" + player + "-track .active").removeClass('active');
}