import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
  }
  receiveAttack([x, y]) {
    for (let i = 0; i < this.ships.length; i++) {
      let newship = this.ships[i];

      for (let j = 0; j < newship.coordinates.length; j++) {
        let coord = newship.coordinates[j];

        if (coord[0] === x && coord[1] === y) {
          newship.ship.hit();
          return;
        }
      }
    }
    this.missedAttacks.push([x, y]);
  }

  placeShip(ship, coordinates) {
    let obj = {
      ship,
      coordinates,
    };

    this.ships.push(obj);
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      let newship = this.ships[i];
      if (!newship.ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}
