import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

test("test gameboard content", () => {
  const gameboard = new Gameboard();
  expect(gameboard.missedAttacks).toEqual([]);
});

test("test miss shot", () => {
  const gameboard2 = new Gameboard();
  gameboard2.receiveAttack([1, 1]);
  gameboard2.receiveAttack([2, 2]);
  expect(gameboard2.missedAttacks).toEqual([
    [1, 1],
    [2, 2],
  ]);
});

test("test ship placement", () => {
  const gameboard3 = new Gameboard();
  const ship = new Ship(2);
  const ship2 = new Ship(2);
  gameboard3.placeShip(ship, [
    [0, 0],
    [0, 1],
  ]);
  gameboard3.placeShip(ship2, [
    [1, 1],
    [1, 2],
  ]);
  expect(gameboard3.ships.length).toBe(2);
});

test("test hit ship", () => {
  const gameboard4 = new Gameboard();
  const ship3 = new Ship(2);
  gameboard4.placeShip(ship3, [
    [0, 0],
    [0, 1],
  ]);
  gameboard4.receiveAttack([0, 0]);
  expect(ship3.hits).toBe(1);
});

test("test all ships are sunk", () => {
  const gameboard5 = new Gameboard();
  const ship4 = new Ship(2);
  const ship5 = new Ship(2);

  gameboard5.placeShip(ship4, [
    [0, 0],
    [0, 1],
  ]);

  gameboard5.placeShip(ship5, [
    [1, 1],
    [1, 2],
  ]);
  gameboard5.receiveAttack([0, 0]);
  gameboard5.receiveAttack([0, 1]);

  gameboard5.receiveAttack([1, 1]);
  gameboard5.receiveAttack([1, 2]);

  expect(gameboard5.allShipsSunk()).toBe(true);
});
