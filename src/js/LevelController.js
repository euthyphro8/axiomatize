import Point from "./math/Point";

export default class LevelController {
  constructor(canvas) {
    this.scale = 100;
    this.canvas = canvas;
    this.clickThisTick = false;
    this.clickPosition = new Point();
    this.registerEvents();
  }

  registerEvents() {
    this.canvas.addEventListener("click", this.onClick.bind(this), {
      passive: true
    });
  }

  update(data) {
    if (this.clickThisTick) {
      data.addPoint(this.clickPosition);
      this.clickPosition = new Point();
      this.clickThisTick = false;
    }
  }

  onClick(event) {
    const w = this.canvas.offsetWidth;
    const h = this.canvas.offsetHeight;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = (ar * h) / this.scale;
    this.clickThisTick = true;
    this.clickPosition.x = Math.round(event.offsetX / sx);
    this.clickPosition.y = Math.round(event.offsetY / sy);
  }
}
