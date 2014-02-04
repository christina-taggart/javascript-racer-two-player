// Document ready:
$(function() {

  // Put player ships in starting spaces
  player1 = new Player('player-1');
  player2 = new Player('player-2');
  player1.placePlayer();
  player2.placePlayer();

  // Keyup event handler: players advance on certain keyups
  $(document).on('keyup', function(event) {
    // keyCode 81 = q, advance player 1
    if (event.keyCode === 81) {
      if (player1.boost === 3) {
        console.log(player1.boost)
        player1.advancePlayer();
        player1.boost_sound.play();
        player1.boost = 0;
      } else {
        player1.boost += 1;
      }
    }
    // keyCode 80 = p, advance player 2
    if (event.keyCode === 80) {
      if (player2.boost === 3) {
        console.log(player2.boost)
        player2.advancePlayer();
        player2.boost_sound.play();
        player2.boost = 0;
      } else {
        player2.boost += 1;
      }
    }
  });

});

var Player = function(player) {
  this.player = player;
  this.boost = 0;
  this.boost_sound = new Audio("boost.wav");

  this.updatePlayerPosition = function(space) {
    this.removePlayer();
    $("#" + player + "-track #space-" + space.toString()).addClass('active');
    this.placePlayer();
  }

  this.advancePlayer = function() {
    space = (this.playerPosition() + 1);
    this.updatePlayerPosition(space);
  }

  this.playerPosition = function() {
    return parseInt($("#" + player + "-track .active").attr('id').slice(-1));
  }

  this.placePlayer = function() {
    $("#" + player + "-track .active").append("<img src='images/" + player + ".png'/>");
  }

  this.removePlayer = function() {
    $("#" + player + "-track .active").find('img').remove();
    $("#" + player + "-track .active").removeClass('active');
  }
}