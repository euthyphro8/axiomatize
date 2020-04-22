import Point from "./math/Point";
import Line from "./math/Line";

export default class LevelData {
  constructor() {
    this.points = [];
    this.lines = [];
    this.selected = null;
    this.phantom = null;
    this.highlighted = null;
    this.hasMutated = false;
    this.undos = [];
    this.redos = [];
  }

  addPoint(point) {
    this.hasMutated = false;
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
      this.pushPoint(point);

      // If a selected point exists...
      if (this.selected) {
        // Then immediately create a line
        const line = new Line(this.selected, point);
        this.pushLine(line);
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
          this.pushLine(line);
          this.selected = null;
        }
      } else {
        // The point is old and there was no selected so make this selected
        this.selected = point;
      }
    }
  }

  addPointToLine(point, line) {
    this.hasMutated = false;
    this.pushPoint(point);
    line.add(point);
    if (this.selected) {
      if (!line.contains(this.selected)) {
        const line = new Line(this.selected, point);
        this.pushLine(line);
      }
      this.selected = null;
    } else {
      this.selected = point;
    }
  }

  pushPoint(point) {
    this.storeMutation();
    this.points.push(point);
  }
  pushLine(line) {
    this.storeMutation();
    this.lines.push(line);
  }

  storeMutation() {
    if (!this.hasMutated) {
      console.log("mutating");
      // Store the current state as a undo
      this.undos.push({
        points: [...this.points],
        lines: [...this.lines],
        selected: this.selected
          ? new Point(this.selected.x, this.selected.y)
          : null
      });
      // A mutation clears any redos
      this.redos = [];
      this.hasMutated = true;
    }
  }

  undo() {
    console.log("undo");
    // If undo is availableate
    const oldData = this.undos.pop();
    if (oldData) {
      // Push current state onto redo stack
      this.redos.push({
        points: [...this.points],
        lines: [...this.lines],
        selected: this.selected
          ? new Point(this.selected.x, this.selected.y)
          : null
      });
      // And reaply old state to current st
      this.points = oldData.points;
      this.lines = oldData.lines;
      this.selected = oldData.selected;
      //Get rid of highlighted
      this.highlighted = null;
    }
  }

  redo() {
    console.log("redo");
    const newData = this.redos.pop();
    // If a redo is available
    if (newData) {
      // Moving back means pushing state back onto undo stack
      this.undos.push({
        points: [...this.points],
        lines: [...this.lines],
        selected: this.selected
          ? new Point(this.selected.x, this.selected.y)
          : null
      });
      // Then applying redo to current state
      this.points = newData.points;
      this.lines = newData.lines;
      this.selected = newData.selected;
      //Get rid of highlighted
      this.highlighted = null;
    }
  }
}
