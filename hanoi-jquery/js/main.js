const HanoiGame = require("./game.js");
const HanoiView = require("./view.js");

$( () => {
  console.log("Hello, World!");

  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
