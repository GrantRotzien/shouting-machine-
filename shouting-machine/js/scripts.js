$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var shoutOutput = $("input#blank").val().toUpperCase();

    $(".shout").text(shoutOutput);

    $("#shout").show();

    event.preventDefault();
  });
});
