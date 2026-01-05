import Game from "./game.js";
import Ship from "./ship.js";

const game = new Game();

const statusDiv = document.getElementById("status");
const playerBoardDiv = document.getElementById("player-board");
const npcBoardDiv = document.getElementById("npc-board");

function setupShips() {
  game.player.gameboard.placeShip(new Ship(2), [
    [0, 0],
    [0, 1],
  ]);

  game.npc.gameboard.placeShip(new Ship(2), [
    [1, 1],
    [1, 2],
  ]);
}

function render() {
  statusDiv.textContent = game.isDone
    ? "Juego terminado"
    : game.turn === game.player
    ? "Tu turno"
    : "Turno de la computadora";

  playerBoardDiv.innerHTML = "";
  npcBoardDiv.innerHTML = "";

  playerBoardDiv.appendChild(renderBoard(game.player.gameboard, false));
  npcBoardDiv.appendChild(renderBoard(game.npc.gameboard, true));
}

function renderBoard(board, isEnemy) {
  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(5, 40px)";
  grid.style.gap = "4px";

  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      const cell = document.createElement("button");
      cell.style.width = "40px";
      cell.style.height = "40px";

      const isMiss = board.missedAttacks.some((c) => c[0] === x && c[1] === y);

      let isShip = false;
      board.ships.forEach((s) =>
        s.coordinates.forEach((c) => {
          if (c[0] === x && c[1] === y) isShip = true;
        })
      );

      if (!isEnemy && isShip) cell.textContent = "🚢";
      if (isMiss) cell.textContent = "❌";

      if (isEnemy && game.turn === game.player && !game.isDone) {
        cell.addEventListener("click", () => {
          game.playersTurn([x, y]);
          render();

          if (!game.isDone) {
            setTimeout(() => {
              game.playersTurn();
              render();
            }, 500);
          }
        });
      }

      grid.appendChild(cell);
    }
  }

  return grid;
}

setupShips();
render();
