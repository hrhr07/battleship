import Player from "./player.js";
import Gameboard from "./gameboard.js";

test("test player content", () => {
  const player = new Player();
  expect(player.gameboard).toBeInstanceOf(Gameboard);
});

test("test computer player", () => {
  const player2 = new Player("npc");
  expect(player2.type).toBe("npc");
});

test("test computer missed attack", () => {
  const player3 = new Player("npc");
  const enemyboard = new Gameboard();
  player3.attack(enemyboard);
  expect(enemyboard.missedAttacks.length).toBe(1);
});

test("test computer missed attack twice", () => {
  const player3 = new Player("npc");
  const enemyboard = new Gameboard();
  player3.attack(enemyboard);
  player3.attack(enemyboard);

  expect(enemyboard.missedAttacks.length).toBe(2);
  expect(enemyboard.missedAttacks[0]).not.toEqual(enemyboard.missedAttacks[1]);
});
