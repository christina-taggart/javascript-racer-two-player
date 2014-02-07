$( document ).ready(function() {
  $('.game-url').hide()
  $('body').bind('keyup', advance_players)
});

var advance_players = function(e){

      if(e.keyCode==39) {
        var current_spot = $('.spot1')
        $('.spot1').removeClass('spot1')
        current_spot.next().addClass('spot1')
        if ($('#last_1').hasClass("spot1")){
          var winner = $('.player1').text()
          saveWinner(winner)
          $('.winner').empty().append("Player 1 has won")
          $('.players').hide()
          $('.tracks').hide()
        }
      }

      if(e.keyCode==68) {
        var current_spot = $('.spot2')
        console.log("key2")
        $('.spot2').removeClass('spot2')
        current_spot.next().addClass('spot2')
        if ($('#last_2').hasClass("spot2")){
          var winner = $('.player2').text()
          saveWinner(winner)
          $('.winner').empty().append("Player 2 has won")
          $('.game-url').show()
          $('.players').hide()
          $('.tracks').hide()
        }

      }
    }

    var saveWinner = function(winner){
      $.ajax({
        type: "POST",
        url: '/games/' + $('.game')[0].id,
        dataType: 'json',
        data: {winner : winner}
      })
    };