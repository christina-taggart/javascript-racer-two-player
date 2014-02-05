var player_positions = new Array()
player_positions['player1'] = 0
player_positions['player2'] = 0
game_over = false;

window.onload = function() {
window.onkeyup=processKeyPress
}

function processKeyPress(event){
  // alert(event.keyCode)
  if(event.keyCode === 81){
    moveActive('player2')
  }
  else if(event.keyCode === 80){
    moveActive('player1')
  }
}

function moveActive(row) {
  console.log('getting called ' + row)
  tr_p = document.getElementById(row)
  position = player_positions[row]
  if((position < tr_p.children.length - 1 ) && !game_over )
  {
    updatePosition(row)
    checkForWinner(row)
  }

}

function updatePosition(row) {
  position = player_positions[row]
  old_td = tr_p.children[position].setAttribute('class','')
  position += 1
  new_td = tr_p.children[position].setAttribute('class','active')
  player_positions[row] = position
}

function checkForWinner(row) {
  position = player_positions[row]
  if ((position >= tr_p.children.length - 1) )
  {
    victory_div = document.getElementById('victory-message')
    victory_div.firstChild.nodeValue = row +' Wins!'
    game_over = true;
    reset_link = document.createElement("a")
    reset_link.setAttribute('id', 'reset_game')
    reset_link.setAttribute('href','#none')
    reset_link.setAttribute('onclick','resetGame()');
    text = document.createTextNode("Reset Game")
    reset_link.appendChild(text)
    victory_div.appendChild(reset_link)
  }
}

function resetGame() {
  console.log('ok')
  game_over = false

  resetPosition('player1')
  resetPosition('player2')

  victory_div = document.getElementById('victory-message')
  text_node = victory_div.firstChild
  text_node.nodeValue = ""
  reset_link = victory_div.getElementsByTagName('a')[0]
  victory_div.removeChild(reset_link)
}

function resetPosition(player) {
  tr_p = document.getElementById(player)
  position = player_positions[player]
  old_td = tr_p.children[position].setAttribute('class','')
  player_positions[player] = 0
  position = player_positions[player]
  new_td = tr_p.children[position].setAttribute('class','active')
}