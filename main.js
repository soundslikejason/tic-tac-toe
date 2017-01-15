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
        player = playerTurn(player);
      }
    });
  }

  function playerTurn(player) {
		counter ++;
		if (player === "X") {
			$('#r1').prop("checked", false);
			$('#r2').prop("checked", true);
			player = "O";
		  player = computerTurn(player);
		} else {
			$('#r1').prop("checked", true);
			$('#r2').prop("checked", false);
			player = "X";
			player = computerTurn(player);
		}
		return player;
	}

  function computerTurn(player) {
		counter ++;
		var random = board[Math.floor(Math.random() * board.length)];
		if (player === "X") {
			$("#cell" + random).text("X");
			$('#r1').prop("checked", false);
			$('#r2').prop("checked", true);
			player = "O";
		} else {
			$("#cell" + random).text("O");
			$('#r1').prop("checked", true);
			$('#r2').prop("checked", false);
			player = "X";
		}
    return player;
  }
});
