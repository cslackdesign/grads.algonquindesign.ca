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

$(document).ready(function() {
	$('.video').magnificPopup({
		type: 'iframe',


		iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  patterns: {
		    vimeo: {
		      index: 'vimeo.com/',
		      id: '85752664/',
		      src: '//player.vimeo.com/video/%id%?autoplay=1'
		    },
		  },

		  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}

});
