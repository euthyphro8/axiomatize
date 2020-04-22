import Point from "./math/Point";

export default class LevelController {
  constructor(canvas) {
    this.scale = 100;
    this.highlightDistance = 3;
    this.canvas = canvas;
    this.clickPosition = new Point();
    this.clickThisTick = false;
    this.mousePosition = new Point();
    this.mouseDirty = false;
    this.registerEvents();
  }

  registerEvents() {
    this.canvas.addEventListener("click", this.onClick.bind(this), {
      passive: true
    });
    this.canvas.addEventListener("mousemove", this.onMove.bind(this), {
      passive: true
    });
  }

  update(data) {
    if (this.clickThisTick) {
      this.clickThisTick = false;
      data.addPoint(this.clickPosition);
      this.clickPosition = new Point();
      data.highlighted = null;
      return true;
    } else {
      if (this.mouseDirty) {
        this.mouseDirty = false;
        let minDist = 10000;
        let minPoint = null;
        for (let p of data.points) {
          let d = this.mousePosition.distance(p);
          if (d < this.highlightDistance) {
            if (d < minDist) {
              minDist = d;
              minPoint = p;
            }
          }
        }
        data.highlighted = minPoint;
      }
      return false;
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

  onMove(event) {
    const w = this.canvas.offsetWidth;
    const h = this.canvas.offsetHeight;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = (ar * h) / this.scale;
    this.mouseDirty = true;
    this.mousePosition.x = Math.round(event.offsetX / sx);
    this.mousePosition.y = Math.round(event.offsetY / sy);
  }
}
