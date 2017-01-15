$(document).ready(function() {
  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  var counter = 0;
  var player = $("input:radio[name=player]:checked").val();

  $("input:radio[name=player]").click(function() {
    player = $(this).val();
  });

  for (var i = 1; i <= 9; i++) {
    $("#cell" + i).on("click", function() {
      if ($(this).text() === "X" || $(this).text() === "O") {
        alert("Already Selected!");
      } else {
        if (player === "X") {
          $(this).text("X");
        } else {
          $(this).text("O");
        }
      }
    });
  }



});
