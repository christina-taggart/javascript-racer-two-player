// Document ready:
$(function() {

  start();

  soviet = new Audio('soviet-anthem.wav')
  american = new Audio('american-anthem.wav')

  // Keyup event handler: players advance on certain keyups until a player wins

    $(document).on('keyup', function(event) {
      // keyCode 81 = q, advance player 1
      if (!winner) {
        if (event.keyCode === 81) {
          flash('#flash1');
          player1.checkBoostToAdvance();
          if (player1.playerPosition() === 0) {
            player2.explode();
            american.play();
            victory(player1.playerName.toUpperCase());
          }
        }
        // keyCode 80 = p, advance player 2
        if (event.keyCode === 80) {
          flash('#flash2');
          player2.checkBoostToAdvance();
          if (player2.playerPosition() === 0) {
            player1.explode();
            soviet.play();
            victory(player2.playerName.toUpperCase());
          }
        }
      }
    });

    $('#restart').on('click', restart());
});


//-----Helper functions-----

var start = function() {
  player1 = new Player('player-1', 'USA');
  player2 = new Player('player-2', 'USSR');
  player1.placePlayer();
  player2.placePlayer();
  winner = false;
}

var restart = function(event) {
  event.preventDefault();
  $('.winner').css('display', 'none');
  $('#victor-name').empty();
  $('.winner').find('img').remove();
  player1.updatePlayerPosition(1);
  player2.updatePlayerPosition(1);
  player1.boost = 0;
  player2.boost = 0;
  winner = false;
}

var victory = function (winningPlayer) {
  winner = true;
  $('.winner').css('display', 'block');
  $('#victor-name').append(winningPlayer + " WON");
  if (winningPlayer === "USA") {
    $('.winner').append("<img id='flag' src='images/american-flag.png'/>")
  } else if (winningPlayer === "USSR") {
    $('.winner').append("<img id='flag' src='images/soviet-flag.png'/>")
  }
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
    this.removeImage();
    $("#" + playerId + "-track .active").removeClass('active');
  }

  this.removeImage = function() {
    $("#" + playerId + "-track .active").find('img').remove();
  }

  this.explode = function() {
    this.removeImage();
    $("#" + playerId + "-track #space-" + this.playerPosition().toString()).append("<img loop=1 src='images/explosion.gif'/>");
    this.explosionSound.play();
  }
}