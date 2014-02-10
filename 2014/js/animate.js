
var $map = $('.map img');


//FLYING SHIPS

$('.map-section').waypoint(function (){
 /* $ships.eq(0).addClass('js-ship-delay-1');
  $ships.eq(2).addClass('js-ship-delay-3');
  $ships.eq(3).addClass('js-ship-delay-2');

  We can add the classes this way via Javascript, however it is easier to just add the classes onto the html elements themselves.
  Both work correctly.
  */
  $map.addClass('js-map-animate');
}, {offset: '60%'});
