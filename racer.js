
$(document).ready(function(){
  document.addEventListener('keyup', function(event){
      $(".racer_table").each(function(){
      if(event.keyCode == 81){
        var position = $('.active1').next();
        $('td').removeClass("active1");
        position.addClass("active1");
        if(position.hasClass("end active1")){
          alert("Player 1 wins, resetting game.")
          location.reload(true);
        }
      }
      else if(event.keyCode == 80){
        var position = $('.active2').next();
        $('td').removeClass("active2");
        position.addClass("active2");
        if(position.hasClass("end active2")){
          alert("Player 2 wins, resetting game.")
          location.reload(true);
        }
      }
    });
  }, true);
});