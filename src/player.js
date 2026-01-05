import Gameboard from "./gameboard";

export default class Player {
  constructor(type) {
    this.type = type;
    this.gameboard = new Gameboard();
    this.attacks = [];
  }

  attack(gameboard, coords = null) {
    let attack;

    if (coords) {
      attack = coords;
    } else {
      let x, y;
      do {
        x = Math.floor(Math.random() * 5);
        y = Math.floor(Math.random() * 5);
      } while (this.attacks.some((a) => a[0] === x && a[1] === y));
      attack = [x, y];
    }

    this.attacks.push(attack);
    gameboard.receiveAttack(attack);
  }
}
