$(function(){
	var player1 = new Player($("#player1_strip"), 65);
	var player2 = new Player($("#player2_strip"), 76);
	$(document).keyup(function(event){
		player1.update(event);
		player2.update(event);
	});
});

function Player(track_cells, keyCode){
	this.position = 0,
	this.track = track_cells,
	this.keyCode = keyCode
}

Player.prototype.advance = function(){ this.position += 1 };
Player.prototype.clear = function(){ this.track.find(".active").attr('class', '') };
Player.prototype.display = function(){ $(this.track.children()[this.position]).attr('class', 'active') };
Player.prototype.update = function(event){
	if(event.keyCode == this.keyCode){ this.advance() }
	this.checkWin(20);
	this.clear();
 	this.display(); 
};

Player.prototype.checkWin = function(winVal){
	if (Object.winner || this.position > winVal){ this.reset(); }
	if(this.position == winVal){
		$('h1').text("Player " + this.track[0].id[6] + " Wins!");
		isWinner();
	}
};

Player.prototype.reset = function(){
	noWinner();
	this.position = 0;
	this.display();
};

function isWinner(){
	Object.winner = true;
}

function noWinner(){
	Object.winner = false;
}

Object.prototype.winner = false;
