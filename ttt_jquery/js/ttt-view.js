class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", $(".tile"), (event) => {
      let $tile = $(event.target);
      this.makeMove($tile);
    });
  }

  makeMove($square) {
    let tilePos = $square.attr("id");
    let currentPlayer = this.game.currentPlayer;
    const pos = tilePos.split("-").slice(1);

    try {
      this.game.playMove(pos);

      $square.addClass(currentPlayer);
      $square.after();
    }
    catch (e) {
        alert("This " + e.msg.toLowerCase());
    }

    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");
      this.$el.append("<h1>GAME OVER!</h1>");
    }
  }

  setupBoard() {

    const $grid = $("<ul></ul>").addClass("grid");
    this.$el.append($grid);

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $tile = $("<li></li>").addClass(`tile`);
        $tile.attr("id", `tile-${row}-${col}`);
        $grid.append($tile);
      }
    }
  }
}

module.exports = View;
