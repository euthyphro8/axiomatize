import Point from "./math/Point";
import Line from "./math/Line";

export default class LevelData {
  constructor() {
    this.points = [];
    this.lines = [];
  }
  addPoint(point) {
    let isOldPoint = false;
    for (let p of this.points) {
      if (point.equals(p)) {
        isOldPoint = true;
        break;
      }
    }
    // If the point is new..
    if (!isOldPoint) {
      // Immediately add it and...
      this.points.push(point);
      // If a selected point exists...
      if (this.selected) {
        // Then immediately create a line
        const line = new Line(this.selected, point);
        this.lines.push(line);
        // And get rid of the selected
        this.selected = null;
      } else {
        // Otherwise make the new point the selected point
        this.selected = point;
      }
      // If the point is old...
    } else {
      // And a selected point exists..
      if (this.selected) {
        // And they're the same...
        if (point.equals(this.selected)) {
          // Then clear the selected
          this.selected = null;
          // Otherwise they're distinct points so...
        } else {
          // Create a line with both and clear selected.
          const line = new Line(this.selected, point);
          this.lines.push(line);
          this.selected = null;
        }
      } else {
        // The point is old and there was no selected so make this selected
        this.selected = point;
      }
    }
  }
}
