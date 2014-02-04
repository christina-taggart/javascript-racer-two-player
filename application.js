$(document).ready(function() {
  $(document).on('keyup', function(event) {
    $('body').css('background-color', 'red');
    // var update_player_position = function(player, newPosition) {
    //   var whichCell = document.querySelector(".racer_table").rows[player-1].cells[newPosition];
    //   var whichPlayer = document.getElementById(player).querySelector(".active");
    //   $(whichPlayer).removeClass("active");
    //   $(whichCell).addClass("active");
    // }

  });
});