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
      let tilePos = $tile.attr("id");
      const pos = tilePos.split("-").slice(1);
      console.log(pos);
      this.game.playMove(pos);
    });
  }

  makeMove($square) {}

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
