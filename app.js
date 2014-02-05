$(window).load (function() {
  LAPS_IN_A_GAME = 5;
  player1pos = 1;
  player1Score = 0;
  player2pos = 1;
  player2Score = 0;

  var updatePlayerPosition = function(playerNumber, position) {
    clearPlayerTrack(playerNumber);
    if (playerNumber === 1) {
      $("#player" + playerNumber + "_strip td:nth-child(" + position + ")").html("<img src='player1_boat.png'>");
    } else {
      $("#player" + playerNumber + "_strip td:nth-child(" + position + ")").html("<img src='player2_boat.png'>");
    }
  }

  var clearPlayerTrack = function(playerNumber) {
    var squares = $("#player" + playerNumber + "_strip").find('td');
    for (var i=0; i < squares.length; i++) {
      squares.empty();
    }
  }

  var lapCompleted = function(playerNumber, position) {
    var lengthOfTracks = $('#player1_strip').first().find('td').length;
    if (position > lengthOfTracks) {
      // reset the position back to just before the beginning of the track
      // the effect is that we now have the concept of laps on the track
      scoreKeeper(playerNumber)
      return 1;
    } else {
      return position;
    }
  }

  var scoreKeeper = function(playerNumber) {
    if (playerNumber === 1) {
      player1Score++;
      $('.player1_score').text(player1Score + " / " + 5 + " laps");
      gameOver(player1Score, playerNumber);
    } else {
      player2Score++;
      $('.player2_score').text(player2Score + " / " + 5 + " laps");
      gameOver(player2Score, playerNumber);
    }
  }

  var gameOver = function(lapsCompleted, playerNumber) {
    if (lapsCompleted === LAPS_IN_A_GAME) {
      alert("Player " + playerNumber + " is the winner!")
      location.reload();
    }
  }



  $(document).keyup(function(keypress) {
    if (keypress.which === 65) {
      player1pos++;
      player1pos = lapCompleted(1, player1pos);
      console.log(player1pos);
      updatePlayerPosition(1, player1pos);
    } else if (keypress.which === 76) {
      player2pos++;
      player2pos = lapCompleted(2, player2pos);
      console.log(player2pos);
      updatePlayerPosition(2, player2pos);
    }
  });
});