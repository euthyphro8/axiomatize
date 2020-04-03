export default class Screen {
  constructor() {
    this.scale = 100;
  }

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

  renderGrid() {
    if (!this.context) return;
    const r = 1;
    const w = this.context.canvas.width;
    const h = this.context.canvas.height;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = h / (this.scale * ar);
    for (let y = 0; y < this.scale; y++) {
      for (let x = 0; x < this.scale; x++) {
        const px = sx * x;
        const py = sy * y;
        this.context.moveTo(px, py);
        this.context.ellipse(px, py, r * ar, r / ar, 0, 0, 2 * Math.PI);
      }
    }
  }

  renderPoint(point) {
    if (!this.context) return;
    const r = 5;
    const w = this.context.canvas.width;
    const h = this.context.canvas.height;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = h / (this.scale * ar);

    const px = sx * point.x;
    const py = sy * point.y;
    this.context.moveTo(px, py);
    this.context.ellipse(px, py, r * ar, r / ar, 0, 0, 2 * Math.PI);
  }

  renderPoints(points) {
    if (!this.context) return;
    const r = 5;
    const w = this.context.canvas.width;
    const h = this.context.canvas.height;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = h / (this.scale * ar);

    for (let p of points) {
      const px = sx * p.x;
      const py = sy * p.y;
      this.context.moveTo(px, py);
      this.context.ellipse(px, py, r * ar, r / ar, 0, 0, 2 * Math.PI);
    }
  }

  renderLines(lines) {
    if (!this.context) return;
    const w = this.context.canvas.width;
    const h = this.context.canvas.height;
    const ar = w / h;
    const sx = w / this.scale;
    const sy = h / (this.scale * ar);

    for (let l of lines) {
      this.context.moveTo(l.a.x * sx, l.a.y * sy);
      this.context.lineTo(l.b.x * sx, l.b.y * sy);
    }
  }
}
