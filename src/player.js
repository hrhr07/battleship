import Gameboard from "./gameboard";

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
    this.attacks = [];
  }

  attack(gameboard) {
    let corX = this.attacks.length;
    let newCord = [corX, 0];
    this.attacks.push(newCord);
    gameboard.receiveAttack(newCord);
  }
}
