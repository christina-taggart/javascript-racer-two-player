// Document ready:
$(function() {

  // Put player ships in starting spaces
  placePlayer('player-1');
  placePlayer('player-2');

  player1Boost = 0;
  player2Boost = 0;

  // Keyup event handler: players advance on certain keyups
  $(document).on('keyup', function(event) {
    // keyCode 80 = q
    if (event.keyCode === 81) {
      if (player1Boost === 3) {
        advancePlayer('player-1');
        player1Boost = 0;
      } else {
        player1Boost += 1;
      }
    }
    // keyCode 81 = p
    if (event.keyCode === 80) {
      if (player2Boost === 3) {
        advancePlayer('player-2');
        player2Boost = 0;
      } else {
        player2Boost += 1;
      }
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