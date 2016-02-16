gameState = {
		player1_position: 0,
		player2_position: 0
}

won = false;
$(document).ready(function() { 
	setup();

	$(document).on('keyup', function(e) {
		var code = e.keyCode || e.which;
		q_keycode = 81;
		w_keycode = 87;

		o_keycode = 79;	
		p_keycode = 80;

		if(code == q_keycode || code == w_keycode)
			update_player_position('player1', gameState.player1_position+1);
		else if(code == p_keycode || code == o_keycode)
			update_player_position('player2', gameState.player2_position+1);

		if(!won)
			did_someone_win();
	});

	$('#restart_btn').click(function(e) {
		e.preventDefault();

		restart();
	});

});

function setup() {
	for(var i = 0;i < 50;i++) {
		$("#player1_strip").append($("<td></td>"));
		$("#player2_strip").append($("<td></td>"));
	}
}

function update_player_position(player, position) {
	td_elements = $("#" + player + "_strip").children()
	td_elements.removeClass('active')
	$(td_elements[position-1]).addClass('active')
	gameState[player + '_position'] = position;
}

function did_someone_win() {
	players = ['player1', 'player2']
	for(var i = 0;i < players.length;i++) {
		strip_length = $("#" + players[i] + "_strip").children().length;
		position = gameState[players[i] + '_position'];
		if (position >= strip_length) {
			alert(players[i] + ' won!');
			won = true;
		}
	}
}

function restart() {
	won = false;
	gameState = {
		player1_position: 0,
		player2_position: 0
	}
	$('td').removeClass('active')
}