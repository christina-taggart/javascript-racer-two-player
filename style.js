var player_positions = new Array()
player_positions['player1_strip'] = 0
player_positions['player2_strip'] = 0

window.onload = function() {
window.onkeypress=processKeyPress
}

function processKeyPress(event){
  // alert(event.keyCode)
  if(event.keyCode === 112){
    moveActive('player2_strip')
  }
  else if(event.keyCode === 113){
    moveActive('player1_strip')
  }
}

function moveActive(row) {
  console.log('getting called ' + row)
  tr_p = document.getElementById(row)
  position = player_positions[row]
  if(position < tr_p.children.length - 1 )
  {
    updatePosition(row)
  }

}

function updatePosition(row) {
  old_td = tr_p.children[position].setAttribute('class','')
  position += 1
  new_td = tr_p.children[position].setAttribute('class','active')
  player_positions[row] = position
}
