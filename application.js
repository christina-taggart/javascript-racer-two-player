// Document ready:
$(function() {

  start();

  // Keyup event handler: players advance on certain keyups until a player wins

    $(document).on('keyup', function(event) {
      // keyCode 81 = q, advance player 1
      if (!winner) {
        if (event.keyCode === 81) {
          flash('#flash1');
          player1.checkBoostToAdvance();
          if (player1.playerPosition() === 0) {
            console.log(player1.playerName.toUpperCase());
            victory(player1.playerName.toUpperCase());
          }
        }
        // keyCode 80 = p, advance player 2
        if (event.keyCode === 80) {
          flash('#flash2');
          player2.checkBoostToAdvance();
          if (player2.playerPosition() === 0) {
            console.log(player2.playerName.toUpperCase());
            victory(player2.playerName.toUpperCase());
          }
        }
      }
    });

    $('#restart').on('click', restart());
});


//-----Helper functions-----

var start = function() {
  player1 = new Player('player-1', 'player 1');
  player2 = new Player('player-2', 'player 2');
  player1.placePlayer();
  player2.placePlayer();
  winner = false;
}

var restart = function(event) {
  event.preventDefault();
  $('.winner').css('display', 'none');
  $('#victor-name').empty();
  player1.updatePlayerPosition(1);
  player2.updatePlayerPosition(1);
  player1.boost = 0;
  player2.boost = 0;
  winner = false;
}

var victory = function (winningPlayer) {
  winner = true;
  $(".winner").css('display', 'block');
  $('#victor-name').append(winningPlayer + " WON");
}

var flash = function(element) {
  $(element).css('color', 'red');
  setTimeout(function(){ $(element).css('color', "#ffc754"); }, 50);
}


//-----Player constructor-----
var Player = function(playerId, playerName) {
  this.playerId = playerId;
  this.playerName = playerName;
  this.boost = 0;
  this.boostSound = new Audio("boost.wav");
  this.explosionSound = new Audio("explosion.wav");

  this.updatePlayerPosition = function(space) {
    this.removePlayer();
    $("#" + playerId + "-track #space-" + space.toString()).addClass('active');
    this.placePlayer();
  }

  this.checkBoostToAdvance = function() {
    if (this.boost === 3) {
        this.advancePlayer();
        this.boostSound.play();
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
    return parseInt($("#" + playerId + "-track .active").attr('id').slice(-1));
  }

  this.placePlayer = function() {
    $("#" + playerId + "-track .active").append("<img src='images/" + playerId + ".png'/>");
  }

  this.removePlayer = function() {
    $("#" + playerId + "-track .active").find('img').remove();
    $("#" + playerId + "-track .active").removeClass('active');
  }

  this.explode = function() {
    $("#" + playerId + "-track .active").find('img').remove();
    $("#" + playerId + "-track #space-" + this.playerPosition().toString()).append("<img src='images/explosion.gif'/>");
    this.explosionSound.play();
  }
}