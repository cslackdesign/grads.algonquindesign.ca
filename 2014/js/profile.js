$(document).ready(function(){
  var openStudent = 'student-section';
  var openThumbnails = 'thumbnails';

  $('.profile').hide();

  $('.student-section-btn').click(function () {
    var id = $(this).data('id');
    openProfile = id;
    $('#student-section').fadeOut(400);
    $('#' + id).fadeIn({
      duration: 800,
      start: function () {
        $('#student-section-wrap').height($('#' + id).outerHeight());
      }
    });
  });

  $('.btn-close-profile').click(function () {
    $(this).parents('.profile').fadeOut(400);
    openStudent = 'student-section';
    $('#student-section').fadeIn({
      duration: 400,
      start: function () {
        $('#student-section-wrap').height($('#student-section').outerHeight());
      }
    });
  });


  $('.item').hide();

  $('.thumbnail-btn').click(function () {
    var id = $(this).data('id');
    openProfile = id;
    $('#thumbnails').fadeOut(400);
    $('#' + id).fadeIn({
      duration: 800,
      start: function () {
        $('#thumbnails-wrap').height($('#' + id).outerHeight());
      }
    });
  });

  $('.btn-close').click(function () {
    $(this).parents('.item').fadeOut(400);
    openThumbnails = 'thumbnails';
    $('#thumbnails').fadeIn({
      duration: 400,
      start: function () {
        $('#thumbnails-wrap').height($('#thumbnails-section').outerHeight());
      }
    });
  });



  $('.next-btn').click(function () {
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

  $('.prev-btn').click(function() {
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
  });

  $(window).on('resize', function () {
    $('#work-wrap').height($('#' + openWork).outerHeight());
  });

});
