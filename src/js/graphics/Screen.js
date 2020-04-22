export default class Screen {
  constructor() {}

  begin(context, color = "#e4f03d", lineWidth = 3) {
    this.context = context;
    // this.context.clearRect(
    //   0,
    //   0,
    //   this.context.canvas.width,
    //   this.context.canvas.height
    // );
    this.context.strokeStyle = color;
    this.context.fillStyle = color;
    this.context.lineWidth = lineWidth;
    this.context.beginPath();
  }
  end(stroke = true, fill = false) {
    if (this.context) {
      if (stroke) this.context.stroke();
      if (fill) this.context.fill();
    }
    this.context = null;
  }

  // renderGrid() {
  //   if (!this.context) return;
  //   const r = 1;
  //   const w = this.context.canvas.width;
  //   const h = this.context.canvas.height;
  //   const ar = w / h;
  //   const sx = w / this.scale;
  //   const sy = h / (this.scale * ar);
  //   for (let y = 0; y < this.scale; y++) {
  //     for (let x = 0; x < this.scale; x++) {
  //       const px = sx * x;
  //       const py = sy * y;
  //       this.context.moveTo(px, py);
  //       this.context.ellipse(px, py, r * ar, r / ar, 0, 0, 2 * Math.PI);
  //     }
  //   }
  // }

  renderPoint(point, r) {
    if (!this.context) return;

    this.context.moveTo(point.x + r, point.y);
    this.context.ellipse(point.x, point.y, r, r, 0, 0, 2 * Math.PI);
  }

  renderPoints(points, r) {
    if (!this.context) return;

    for (let p of points) {
      this.context.moveTo(p.x, p.y);
      this.context.ellipse(p.x, p.y, r, r, 0, 0, 2 * Math.PI);
    }
  }

  renderLines(lines) {
    if (!this.context) return;

    for (let l of lines) {
      this.context.moveTo(l.p1().x, l.p1().y);
      this.context.lineTo(l.p2().x, l.p2().y);
    }
  }
}
