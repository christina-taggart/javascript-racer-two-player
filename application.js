var update_player_position = function(player, newPosition) {
  var whichCell = document.querySelector(".racer_table").rows[player-1].cells[newPosition];
  var whichPlayer = document.getElementById(player).querySelector(".active");
  $(whichPlayer).removeClass("active");
  $(whichCell).addClass("active");
}
// $(function() {
  // function myFunction()
  // {
  //   var x = document.querySelector(".racer_table").rows[0].cells.length;
  //   console.log(x);
  // }

// });