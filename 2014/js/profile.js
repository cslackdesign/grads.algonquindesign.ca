$('.profile').hide();

//Open Profile
$('#student-section').on('click', '.student-section-btn', function (e) {
  var id = $(this).data('id');
  e.preventDefault();
  $('#student-section').fadeOut(400);
window.scrollTo(0, $('#profile-scroll-to-position').offset().top - $('.masthead').outerHeight() - 8);
  $('#' + id).fadeIn({
    duration: 800,
    start: function () {
     // $('#student-section-wrap').height($('#' + id).outerHeight());
    }
  });
});

// Close Profile
$('.btn-close-profile').click(function () {
  $(this).parents('.profile').fadeOut(400);
  $('#student-section').fadeIn({
    duration: 400,
    start: function () {
      //$('#student-section-wrap').height($('#student-section').outerHeight());
    }
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
    start: function () {
      //$('#thumbnails-wrap').height($('#' + id).outerHeight());
    }
  });
});

//Close Thumbnail

$('.btn-close-item').click(function () {
  var id = $(this).data('id');
  $(this).parents('.item').fadeOut(400);
  $('#' + id).fadeIn({
    duration: 400,
    start: function () {
      //$('#thumbnails-wrap').height($('#thumbnails-section').outerHeight());
    }
  });
});

$('.btn-close-item-bottom').click(function () {
  var id = $(this).data('id');
  $(this).parents('.item').fadeOut(400);
  $('#' + id).fadeIn({
    duration: 400,
    start: function () {
      //$('#thumbnails-wrap').height($('#thumbnails-section').outerHeight());
    }
  });
});

/*
// Next profile button

$('.next-btn-profile').click(function () {
  var $workDiv = $(this).parents('.work-div');
  var $nextDiv = $(this).parents('.work-div').next('.work-div');
  var id = $nextDiv.attr('id');
  openWork = id;

  $workDiv.fadeOut(400);
  $nextDiv.fadeIn({
    duration: 400,
    start: function () {
      $('#work-wrap').height($('#' + id).outerHeight());
    }
  });
});

// Previous profile button

$('.prev-btn-profile').click(function() {
  var $workDiv = $(this).parents('.work-div');
  var $prevDiv = $(this).parents('.work-div').prev('.work-div');
  var id = $prevDiv.attr('id');
  openWork = id;

  $workDiv.fadeOut(400);
  $prevDiv.fadeIn({
    duration: 400,
    start: function () {
      $('#work-wrap').height($('#' + id).outerHeight());
    }
  });
});*/

$(window).on('resize', function () {
//  $('#work-wrap').height($('#' + openWork).outerHeight());
});

