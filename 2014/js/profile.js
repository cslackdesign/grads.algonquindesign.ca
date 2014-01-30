$(document).ready(function(){
  var openProfile = 'profile';

  $('.profile-div').hide();

  $('.profile-btn').click(function () {
    var id = $(this).data('id');
    openWork = id;
    $('#profile').fadeOut(400);
    $('#' + id).fadeIn({
      duration: 800,
      start: function () {
        $('#profile-wrap').height($('#' + id).outerHeight());
      }
    });
  });

 $('.close-btn').click(function () {
    $(this).parents('.profile-div').fadeOut(400);
    openWork = 'profile';
    $('#profile').fadeIn({
      duration: 400,
      start: function () {
        $('#profile-wrap').height($('#profile').outerHeight());
      }
    });
  });

});
