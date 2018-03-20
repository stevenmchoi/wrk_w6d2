class View {
  constructor(game, $el) {
    this.$el = $el;
    this.setupBoard();

  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {

    const $grid = $("<ul></ul>").addClass("grid");
    this.$el.append($grid);

    for (let idx = 0; idx < 9; idx++) {
      const $tile = $("<li></li>").addClass(`tile tile-${idx}`);
      $grid.append($tile);
    }
  }
}

module.exports = View;
