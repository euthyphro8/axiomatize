export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  equals(other) {
    return other.x == this.x && other.y == this.y;
  }
}
