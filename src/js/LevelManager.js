import Screen from "./graphics/Screen";

export default class LevelManager {
  constructor() {
    this.backgroundColor = "#f2c037";
    this.pointColor = "#000000";
    this.lineColor = "#000000";
    this.screen = new Screen();
  }

  render(ctx, data) {
    // Background
    this.screen.begin(ctx, this.backgroundColor);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.screen.end();

    // //Grid
    // this.screen.begin(ctx, this.pointColor, 2);
    // this.screen.renderGrid();
    // this.screen.end(false, true);

    // Lines
    this.screen.begin(ctx, this.lineColor, 2);
    this.screen.renderLines(data.lines);
    this.screen.end(true, false);

    //Points
    this.screen.begin(ctx, this.pointColor, 2);
    this.screen.renderPoints(data.points, 4);
    this.screen.end(true, true);

    //Selected
    if (data.selected) {
      this.screen.begin(ctx, "#F33838", 2);
      this.screen.renderPoint(data.selected, 4);
      this.screen.end(true, true);
    }

    //Highlighted
    if (data.highlighted) {
      this.screen.begin(ctx, "#F37138", 3);
      this.screen.renderPoint(data.highlighted, 6);
      this.screen.end(true, false);
    }
  }
}
