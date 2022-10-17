$(document).ready(function() {

  var uppp = function(){
    var $활성화된_div = $('div.active');

    var $다음 = $활성화된_div.prev();

    $활성화된_div.removeClass('active');
    $다음.addClass('active');
  };

$('button.up').click(uppp);

  var downnn = function(){
    var $활성화된_div = $('div.active');
    var $다음 = $활성화된_div.next();

    $활성화된_div.removeClass('active');
    $다음.addClass('active');
  };

$('button.down').click(downnn);  


  $(window).keyup(function(event){
    if(event.keyCode ==38){
      uppp();

    }else if(event.keyCode ==40){

      downnn();
    }
  })


});

// $('button').click(function(){
//   //장바구니
//   //window = 점원
//   //$는 포장하다.
//   var $활성화된_div = window.$('div.active');
// });

