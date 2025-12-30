import Player from "./player";

export default class Game {
  constructor() {
    this.player = new Player("player");
    this.npc = new Player("npc");
    this.turn = this.player;
    this.isDone = false;
  }

  playersTurn() {
    const enemy = this.turn === this.player ? this.npc : this.player;
    this.turn.attack(enemy.gameboard);
    if (enemy.gameboard.allShipsSunk()) {
      this.isDone = true;
      return;
    }
    this.turn = enemy;
  }
}
