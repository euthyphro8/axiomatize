import Screen from "./graphics/Screen";

export default class LevelManager {
  constructor() {
    this.backgroundColor = "#ffffff";
    this.pointColor = "#000000";
    this.lineColor = "#000000";
    this.screen = new Screen();
  }

  render(ctx, data) {
    // Background
    this.screen.begin(ctx, this.backgroundColor);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.screen.end();

    //Grid
    this.screen.begin(ctx, this.pointColor, 2);
    this.screen.renderGrid();
    this.screen.end(false, true);

    //Points
    this.screen.begin(ctx, this.pointColor, 0);
    this.screen.renderPoints(data.points);
    this.screen.end(true, true);

    // // Lines
    this.screen.begin(ctx, this.lineColor, 2);
    this.screen.renderLines(data.lines);
    this.screen.end(true, false);
  }
}
