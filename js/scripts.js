$(document).ready(function () {
  $('#transportation_survey').submit(function (e) {
    //prevents form from being submitted
    e.preventDefault();
    //logs what the event object is in the console
    console.log(e);
    //this will show the hidden element
    $('#work-responses').show();
    $('#non-work-responses').show();
    //this targets each checked input
    $('input[name="work-transportation"]:checked').each(function() {
    //this logs to the console what "this".val() is
      console.log($(this).val());
      //this will append the string value and break tag to work-responses
      $('#work-responses').append($(this).val() + "<br>");
    });
    $('input[name="non-work-transportation"]:checked').each(function() {
    //this logs to the console what "this".val() is
      console.log($(this).val());
      //this will append the string value and break tag to work-responses
      $('#non-work-responses').append($(this).val() + "<br>");
    });
  });
});
