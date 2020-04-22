import Point from "./Point";

export default class Line {
  constructor(p1 = new Point(), p2 = new Point(1, 1)) {
    this.points = [p1, p2];
    this.a = p2.y - p1.y;
    this.b = p1.x - p2.x;
    this.c = p1.y * p2.x - p1.x * p2.y;
  }
  p1() {
    return this.points[0];
  }
  p2() {
    return this.points[1];
  }
  add(point) {
    if (!this.contains(point)) this.points.push(point);
  }
  contains(point) {
    for (let p of this.points) {
      if (p.equals(point)) return true;
    }
    return false;
  }

  distance(point) {
    const n = Math.abs(this.a * point.x + this.b * point.y + this.c);
    const d = Math.sqrt(this.a * this.a + this.b * this.b);
    return n / d;
  }

  nearestPoint(point) {
    const d = this.a * this.a + this.b * this.b;
    const x =
      (this.b * (this.b * point.x - this.a * point.y) - this.a * this.c) / d;
    const y =
      (this.a * (-this.b * point.x + this.a * point.y) - this.b * this.c) / d;
    return new Point(x, y);
  }
}
