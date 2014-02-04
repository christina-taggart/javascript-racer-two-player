$(document).keyup(function(e){
    if (e.keyCode == 39) {
       update_player_position("1", 1)
    }
});

$(document).keyup(function(e){
    if (e.keyCode == 68) {
       update_player_position("2", 1)
    }
});

$(document).keydown(function(e){
    if (e.keyCode == 40) {
       update_player_position("1", 1)
    }
});

var update_player_position = function(player_num, advance) {
  strip = find_strip(player_num)

  var track = [];
  for(var i = 0, n; n = strip[i]; ++i) track.push(n.className);
  var active_position = track.indexOf('active') + advance

  for(var i = 0, n; n = strip[i]; ++i) strip[i].className = "";
  strip[active_position].className = "active"

  if (active_position == (strip.length - 1)) {
    console.log("last")
    present_winner(player_num)
    reset()
  }
};


var reset = function() {
  var cells = document.getElementsByTagName('td')
  for(var i = 0, n; n = cells[i]; ++i) cells[i].className = "";
  strip1 = find_strip("1")
  strip2 = find_strip("2")
  strip1[0].className = "active"
  strip2[0].className = "active"
};

var present_winner = function(winner) {
  var winner_box = document.getElementById('winner')
  winner_box.innerHTML = ''
  var award = document.createElement('h4')
  award.innerHTML = 'Player ' + winner + " has won!"
  winner_box.appendChild(award)
};


var find_strip = function(id) {
  strip = "player" + id + "_strip"
  return document.getElementById(strip).getElementsByTagName('td')
};