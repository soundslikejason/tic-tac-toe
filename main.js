$(document).ready(function() {
  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        var id = $(this).attr("id");
				var indexValue = parseInt(id.substr(-1), 10);
				var index = board.indexOf(indexValue);
				board.splice(index, 1);
        playerTurn(player);
      }
    });
  }

  function playerTurn(player) {
		counter ++;
		if (player === "X") {
			player = "O";
		  computerTurn(player);
		} else {
			player = "X";
			computerTurn(player);
		}
	}

  function computerTurn(player) {
		counter ++;
		var random = board[Math.floor(Math.random() * board.length)];
		if (player === "X") {
			$("#cell" + random).text("X");
		} else {
			$("#cell" + random).text("O");
		}
    var indexValue = parseInt(random, 10);
    var index = board.indexOf(indexValue);
    board.splice(index, 1);
  }
});
