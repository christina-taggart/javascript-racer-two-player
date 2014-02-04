$(function(){
	var player1 = $("#player1_strip")
	var player2 = $("#player2_strip")
	updateTrackPosition(player1, 4)
});

var updateTrackPosition = function(player, position){
	var trackPosition = player.children();
	trackPosition.attr('class', '');
	$(trackPosition[position - 1]).attr('class', 'active');
}
