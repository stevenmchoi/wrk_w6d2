class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
  }

  setupTowers() {
    const $hanoi = $("<ul></ul>").addClass("hanoi");
    this.$el.append($hanoi);

    for (let pile = 0; pile < 3; pile++) {
      const $pile = $("<li></li>").addClass(`pile`);
      $pile.attr("id", `pile-${pile}`);
      $hanoi.append($pile);
    }

    for (let disc = 0; disc < 3; disc++) {
      const $pile1 = $("#pile-0");
      $pile1.append("<ul><ul>");
      const $pile = $("<li></li>").addClass(`pile`);
      $pile.attr("id", `pile-${pile}`);
      $hanoi.append($pile);
    }
  }
}

module.exports = HanoiView;
