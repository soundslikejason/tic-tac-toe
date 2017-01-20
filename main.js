$(document).ready(function() {
  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var counter = 0;
  var player = $("input:radio[name=player]:checked").val();

  $("input:radio[name=player]").click(function() {
    player = $(this).val();
    reset();
  });

  $("#reset").click(function() {
    reset();
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
      win = winner("X");
      if (win) {
        alert("YOU WIN!");
        reset();
      }
			player = "O";
		  computerTurn(player);
		} else {
      win = winner("O");
      if (win) {
        alert("YOU WIN!");
        reset();
      }
			player = "X";
			computerTurn(player);
		}
	}

  function computerTurn(player) {
		counter ++;
		var random = board[Math.floor(Math.random() * board.length)];
		if (player === "X") {
			$("#cell" + random).text("X");
      win = winner("X");
		} else {
			$("#cell" + random).text("O");
      win = winner("O");
		}
    if (win) {
      alert("YOU LOSE!");
      reset();
    }
    var indexValue = parseInt(random, 10);
    var index = board.indexOf(indexValue);
    board.splice(index, 1);
  }

  function winner(player){
  	if ($("#cell1").text() === player && $("#cell2").text() === player &&
  		$("#cell3").text() === player) {
  		return true;
  	}
	  if ($("#cell4").text() === player && $("#cell5").text() === player &&
			$("#cell6").text() === player) {
			return true;
	  }
	  if ($("#cell7").text() === player && $("#cell8").text() === player &&
			$("#cell9").text() === player) {
			return true;
		}
		if ($("#cell1").text() === player && $("#cell4").text() === player &&
			$("#cell7").text() === player) {
			return true;
		}
		if ($("#cell2").text() === player && $("#cell5").text() === player &&
			$("#cell8").text() === player) {
			return true;
		}
		if ($("#cell3").text() === player && $("#cell6").text() === player &&
			$("#cell9").text() === player) {
			return true;
		}
		if ($("#cell1").text() === player && $("#cell5").text() === player &&
			$("#cell9").text() === player) {
			return true;
		}
		if ($("#cell3").text() === player && $("#cell5").text() === player &&
			$("#cell7").text() === player) {
			return true;
		}
		if (counter === 9 && winner !== true) {
			alert("TIE!");
			reset();
		}
	}

  function reset() {
    for (var i = 1; i <= 9; i++) {
      $("#cell" + i).text("");
    }
    board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    counter = 0;
    player = $("input:radio[name=player]:checked").val();
  }
});
