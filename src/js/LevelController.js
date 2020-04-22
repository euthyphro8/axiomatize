import Point from "./math/Point";

export default class LevelController {
  constructor(canvas) {
    this.canvas = canvas;
    this.clickPosition = new Point();
    this.clickThisTick = false;
    this.mousePosition = new Point();
    this.mouseDirty = false;
    this.highlightDistance = 50;
    this.lineSnapDistance = 20;
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
      if (data.highlighted) {
        // This case to be considered for adding lines
        data.addPoint(data.highlighted);
      } else if (data.phantom) {
        data.addPointToLine(data.phantom.point, data.phantom.line);
        data.phantom = null;
      } else {
        data.addPoint(this.clickPosition);
      }
      this.clickPosition = new Point();
      // data.highlighted = null;
      return true;
    } else {
      if (this.mouseDirty) {
        this.mouseDirty = false;
        // Check if we're close to a point
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
        // If not, check if we're close to a line
        if (!data.highlighted) {
          minDist = 10000;
          let minLine = null;
          for (let l of data.lines) {
            let d = l.distance(this.mousePosition);
            if (d < this.lineSnapDistance) {
              if (d < minDist) {
                minDist = d;
                minLine = l;
              }
            }
          }
          if (minLine) {
            data.phantom = {
              line: minLine,
              point: minLine.nearestPoint(this.mousePosition)
            };
          } else {
            data.phantom = null;
          }
        } else {
          data.phantom = null;
        }
      }
      return false;
    }
  }

  onClick(event) {
    this.clickThisTick = true;
    this.clickPosition.x = event.offsetX;
    this.clickPosition.y = event.offsetY;
  }

  onMove(event) {
    this.mouseDirty = true;
    this.mousePosition.x = event.offsetX;
    this.mousePosition.y = event.offsetY;
  }
}
