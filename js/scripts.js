$(document).ready(function () {
  $('#transportation_survey').submit(function (e) {
    //prevents form from being submitted
    e.preventDefault();
    //logs what the event object is in the console
    console.log(e);
    //this will show the hidden element
    $('#work-responses').show();
    //this targets each checked input
    $('input[type="checkbox"]:checked').each(function() {
    //this logs to the console what "this".val() is
      console.log($(this).val());
      //this will append the string value and break tag to work-responses
      $('#work-responses').append($(this).val() + "<br>");
    });
  });
});
