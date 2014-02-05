// Document ready:
$(function() {

  // Put player ships in starting spaces
  player1 = new Player('player-1');
  player2 = new Player('player-2');
  player1.placePlayer();
  player2.placePlayer();

  winner = false;



  // Keyup event handler: players advance on certain keyups until a player wins

    $(document).on('keyup', function(event) {
      // keyCode 81 = q, advance player 1
      if (!winner) {
        if (event.keyCode === 81) {
          flash('#flash1');
          player1.checkBoostToAdvance();
          if (player1.playerPosition() === 0) {
            winner = true;
             $(".winner").css('display', 'block');
          }
        }
        // keyCode 80 = p, advance player 2
        if (event.keyCode === 80) {
          flash('#flash2');
          player2.checkBoostToAdvance();
          if (player2.playerPosition() === 0) {
            winner = true;
             $(".winner").css('display', 'block');
          }
        }
      }
    });

});

// Helper functions

var flash = function(element) {
  $(element).css('color', 'red');
  setTimeout(function(){ $(element).css('color', "#ffc754"); }, 50);

}

// Player constructor
var Player = function(player) {
  this.player = player;
  this.boost = 0;
  this.boost_sound = new Audio("boost.wav");

  this.updatePlayerPosition = function(space) {
    this.removePlayer();
    $("#" + player + "-track #space-" + space.toString()).addClass('active');
    this.placePlayer();
  }

  this.checkBoostToAdvance = function() {
    if (this.boost === 3) {
        this.advancePlayer();
        this.boost_sound.play();
        this.boost = 0;
      } else {
        this.boost += 1;
      }
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