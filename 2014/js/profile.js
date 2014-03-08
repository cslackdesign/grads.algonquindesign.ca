$(".profile img").error(function(){
	$(this).hide();
});

$('.profile').hide();

//Open Profile
$('#student-section').on('click', '.student-section-btn', function (e) {
	var id = $(this).data('id');
	e.preventDefault();
	$('#student-section').fadeOut(400);
	$('#' + id + ' .img-lazy').trigger('trigger-image-load');
	window.scrollTo(0, $('#profile-scroll-to-position').offset().top - $('.masthead').outerHeight() - 8);
	$('#' + id).fadeIn({
		duration: 800,
	});
});

// Close Profile
$('.btn-close-profile').click(function () {
	$(this).parents('.profile').fadeOut(400);
	$('#student-section').fadeIn({
		duration: 800,
	});
});


$('.item').hide();

// Open Thumbnail

$('.thumbnails').on('click', '.thumbnail-btn', function (e) {
	var id = $(this).data('id');
	e.preventDefault();
	$(this).parents('.thumbnails').fadeOut(400);
	window.scrollTo(0, $('#profile-scroll-to-position').offset().top - $('.masthead').outerHeight() - 8);
	$('#' + id).fadeIn({
		duration: 800,
	});
});

//Close Thumbnail

$('.btn-close-item').click(function () {
	var id = $(this).data('id');
	$(this).parents('.item').fadeOut(400);
	$('#' + id).fadeIn({
		duration: 800,
	});
});

$('.btn-close-item-bottom').click(function (e) {
	var id = $(this).data('id');
	e.preventDefault();
	$(this).parents('.item').fadeOut(400);
	window.scrollTo(0, $('#profile-scroll-to-position').offset().top - $('.masthead').outerHeight() - 8);
	$('#' + id).fadeIn({
		duration: 800,
	});
});


// Next profile button

$('.btn-next-profile').click(function () {
	var $workDiv = $(this).parents('.profile');
	var $nextDiv = $(this).parents('.profile').next('.profile');

	if ($nextDiv.length <= 0) {
		$nextDiv = $(this).parents('.profile').siblings('.profile').first();
	}

	var id = $nextDiv.attr('id');

	$workDiv.fadeOut(400);
	$('#' + id + ' .img-lazy').trigger('trigger-image-load');
	$nextDiv.fadeIn({
		duration: 400,
		start: function () {
			//$('#student-section').height($('#' + id).outerHeight());
		}
	});
});

// Previous profile button

$('.btn-prev-profile').click(function() {
	var $workDiv = $(this).parents('.profile');
	var $prevDiv = $(this).parents('.profile').prev('.profile');

	if ($prevDiv.length <= 0) {
		$prevDiv = $(this).parents('.profile').siblings('.profile').last();
	}

	var id = $prevDiv.attr('id');

	$workDiv.fadeOut(400);
	$('#' + id + ' .img-lazy').trigger('trigger-image-load');
	$prevDiv.fadeIn({
		duration: 400,
		start: function () {
			//$('#student-section').height($('#' + id).outerHeight());
		}
	});
});


/*
$(window).on('resize', function () {
	$('#student-section').height($('#' + openWork).outerHeight());
 });

*/

