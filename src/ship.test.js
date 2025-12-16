import Ship from "./ship.js";

test("test ship content", () => {
  const testShipA = new Ship(4);
  expect(testShipA.length).toBe(4);
  expect(testShipA.hits).toBe(0);
});

test("ship hit", () => {
  const testShipB = new Ship(4);
  testShipB.hit();
  expect(testShipB.hits).toBe(1);
});

test("ship is sunk", () => {
  const testShipC = new Ship(2);
  testShipC.hit();
  testShipC.hit();
  expect(testShipC.isSunk()).toBe(true);
});
