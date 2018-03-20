const View = require("./ttt-view.js");
const Game = require("../solution/game.js");

$( () => {

  const game = new Game();
  const container = $('figure.ttt');
  return new View(game, container);
});
