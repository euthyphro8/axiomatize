export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  distance(point) {
    const dx = this.x - point.x;
    const dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  lineDistance(line) {
    const n = Math.abs(line.a * this.x + line.b * this.y + line.c);
    const d = Math.sqrt(line.a * line.a + line.b * line.b);
    return n / d;
  }

  nearestPoint(line) {
    const d = line.a * line.a + line.b * line.b;
    const x =
      (line.b * (line.b * this.x - line.a * this.y) - line.a * line.c) / d;
    const y =
      (line.a * (-line.b * this.x + line.a * this.y) - line.b * line.c) / d;
    return new Point(x, y);
  }

  equals(other) {
    return other.x == this.x && other.y == this.y;
  }
}
