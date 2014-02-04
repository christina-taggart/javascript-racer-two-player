// $(window).load (function() {

// });

// give these global scope
player1pos = 1;
player2pos = 1;

var updatePlayerPosition = function(playerNumber, position) {
  clearPlayerTrack(playerNumber);
  console.log("player" + playerNumber + " is at pos: " + position); // testing
  $("#player" + playerNumber + "_strip td:nth-child(" + position + ")").attr("class", "active");
}

var clearPlayerTrack = function(playerNumber) {
  var squares = $("#player" + playerNumber + "_strip").find('td');
  for (var i=0; i < squares.length; i++) {
    squares.removeAttr('class');
  }
}

var lapCompleted = function(position) {
  var lengthOfTracks = $('tr').first().find('td').length;
  if (position > lengthOfTracks) {
    // reset the position back to just before the beginning of the track
    // the effect is that we now have the concept of laps on the track
    return 1;
  } else {
    return position;
  }
}

$(document).keyup(function(keypress) {
  // alert("You pressed the " + keypress.which + " key");
  if (keypress.which === 65) {
    player1pos++;
    player1pos = lapCompleted(player1pos);
    console.log(player1pos);
    updatePlayerPosition(1, player1pos);
  } else if (keypress.which === 76) {
    player2pos++;
    player2pos = lapCompleted(player2pos);
    console.log(player2pos);
    updatePlayerPosition(2, player2pos);
  }
});