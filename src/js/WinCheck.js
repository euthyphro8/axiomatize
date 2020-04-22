import LevelData from "./LevelData";

export default class WinCheck {
  constructor() {
    this.checks = new Map();

    /**
     * Tutorial Level 1, checks for exactly 3 points.
     */
    this.checks.set("0-1", data => {
      return [data.points.length === 3];
    });
    /**
     * Tutorial Level 2, checks for at least one line.
     */
    this.checks.set("0-2", data => {
      return [data.lines.length >= 1];
    });
  }

  check(level, data) {
    return this.checks.get(level)(data);
  }
}
