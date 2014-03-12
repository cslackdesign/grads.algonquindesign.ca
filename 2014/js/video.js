// var $dialog = $('#video');
// var $placeholder = $('#video-placeholder');

//  dialogPolyfill.registerDialog($dialog.get(0));

// $('#btn-open').on('click', function(){
//   $placeholder.html('<iframe class="vid" src="//player.vimeo.com/video/85752664?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

//   $dialog.get(0).show();

// });

// $('#close-btn').on('click', function(){
//   $dialog.get(0).close();
//   $placeholder.html('');
// });


$('.btn-open').magnificPopup({
  items: {
      src: '<div class="white-popup"><iframe class="vid" src="//player.vimeo.com/video/88831821?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><h2>Welcome to Level 14</h2></div>',
      type: 'inline'
  },
  closeBtnInside: true
});
