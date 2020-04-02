import Point from "./Point";

export default class Line {
  constructor(a = new Point(), b = new Point(1, 1)) {
    this.a = a;
    this.b = b;
  }
}
