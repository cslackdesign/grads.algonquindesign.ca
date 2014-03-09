var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

 dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function(){
  $placeholder.html('<iframe class="vid" src="//player.vimeo.com/video/85752664?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

  /*.get() returns native javascript for us to access when also using jquery
  (there is both a show for jquery and javascript with different functions)*/

  $dialog.get(0).show();
  //show() --> allows multiple dialogs
  //showModal() --> Single dialog, with no user interaction behind


});

$('#close-btn').on('click', function(){
  $dialog.get(0).close();
  $placeholder.html('');
});

