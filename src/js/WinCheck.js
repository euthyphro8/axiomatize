import LevelData from "./LevelData";

export default class WinCheck {
  constructor() {
    this.checks = new Map();

    /**
     * Tutorial Level 1, checks for exactly 1 point.
     */
    this.checks.set("0-1", data => {
      let a1 = this.strictPointExistence(data, 1);
      return [a1];
    });
    /**
     * Tutorial Level 2, checks for at least one line.
     */
    this.checks.set("0-2", data => {
      let a1 = this.lineExistence(data, 1);
      return [a1];
    });
    /**
     * Beginner Level 1, 3 Point Geometry
     */
    this.checks.set("1-1", data => {
      let a1 = this.strictPointExistence(data, 3);
      let a2 = this.lineDetermination(data);
      let a3 = this.nonCollinearity(data);
      let a4 = this.allLinesIntersect(data);
      return [a1, a2, a3, a4];
    });
    /**
     * Beginner Level 2, 4 Point Geometry
     */
    this.checks.set("1-2", data => {
      let a1 = this.strictPointExistence(data, 4);
      let a2 = this.lineDetermination(data);
      let a3 = this.strictSecancy(data, 2);
      return [a1, a2, a3];
    });
    /**
     * Beginner Level 3, Fano's Geometry
     */
    this.checks.set("1-3", data => {
      let a1 = this.lineExistence(data, 1);
      let a2 = this.strictSecancy(data, 3);
      let a3 = this.nonCollinearity(data);
      let a4 = this.lineDetermination(data);
      let a5 = this.allLinesIntersect(data);
      return [a1, a2, a3, a4, a5];
    });
    /**
     * Beginner Level 4, Young's Geometry
     */
    this.checks.set("1-4", data => {
      let a1 = this.lineExistence(data, 1);
      let a2 = this.strictSecancy(data, 3);
      let a3 = this.nonCollinearity(data);
      let a4 = this.lineDetermination(data);
      let a5 = this.euclideanParallelPostulate(data);
      return [a1, a2, a3, a4, a5];
    });
    /**
     *
     */
    this.checks.set("1-5", data => {
      let a1 = this.lineExistence(data, 1);
      let a2 = this.strictSecancy(data, 3);
      let a3 = this.nonCollinearity(data);
      let a4 = this.euclideanParallelPostulate(data);
      let a5 = this.antiLineDetermination(data);
      let a6 = this.weakLineDetermination(data);
      return [a1, a2, a3, a4, a5, a6];
    });
  }

  check(level, data) {
    return this.checks.get(level)(data);
  }

  weakLineDetermination(data) {
    if (data.points.length === 0) return true;
    for (let i = 0; i < data.points.length; i++) {
      let exceptions = [];
      for (let j = i + 1; j < data.points.length; j++) {
        let p = data.points[i];
        let q = data.points[j];
        // Count all lines they both share
        let lineCount = 0;
        for (let l of data.lines) {
          if (l.contains(p) && l.contains(q)) {
            lineCount += 1;
          }
        }
        // Weak part of the determination
        if (lineCount === 0) {
          // On exception on every line is allowed
          if (exceptions.length > 0) {
            // Get all the found exceptions
            for (let r of exceptions) {
              // And check of any are on the same line
              for (let m of data.lines) {
                // If so the determination is too weak
                if (m.contains(r) && m.contains(p)) {
                  return false;
                }
              }
            }
          }
          // Otherwise add the exception for the point p
          exceptions.push(q);
        }
        // On the otherhand, too many lines is not allowed.
        else if (lineCount > 1) return false;
      }
    }
    return true;
  }

  antiLineDetermination(data) {
    if (data.points.length === 0) return true;
    for (let l of data.lines) {
      for (let p of data.points) {
        if (!l.contains(p)) {
          let nonDetermined = 0;
          for (let q of l.points) {
            // No line should have p and q
            let determined = false;
            for (let m of data.lines) {
              if (m !== l) {
                if (m.contains(p) && m.contains(q)) {
                  determined = true;
                  break;
                }
              }
            }
            // If we could not find a line with both
            if (!determined) nonDetermined += 1;
          }
          // We want there to exist exactly one pair that does not
          // determine a line
          if (nonDetermined !== 1) return false;
        }
      }
    }
    return true;
  }

  lineDetermination(data) {
    if (data.points.length === 0) return true;
    if (data.lines.length === 0) return false;
    for (let i = 0; i < data.points.length; i++) {
      for (let j = i + 1; j < data.points.length; j++) {
        let p = data.points[i];
        let q = data.points[j];
        let lineCount = 0;
        for (let l of data.lines) {
          if (l.contains(p) && l.contains(q)) {
            lineCount += 1;
          }
        }
        if (lineCount !== 1) return false;
      }
    }
    return true;
  }

  secancy(data) {
    for (let l of data.lines) {
      if (l.points.length < 2) return false;
    }
    return true;
  }

  strictSecancy(data, n) {
    for (let l of data.lines) {
      if (l.points.length !== n) return false;
    }
    return true;
  }

  pointExistence(data, n) {
    return data.points.length >= n;
  }

  lineExistence(data, n) {
    return data.points.length >= n;
  }

  strictPointExistence(data, n) {
    return data.points.length === n;
  }

  strictLineExistence(data, n) {
    return data.points.length === n;
  }

  nonCollinearity(data) {
    for (let l of data.lines) {
      for (let p of data.points) {
        if (!l.contains(p)) return true;
      }
    }
    return false;
  }

  allLinesIntersect(data) {
    if (data.lines.length === 0) return true;
    if (data.points.length === 0) return false;
    for (let i = 0; i < data.lines.length; i++) {
      for (let j = i + 1; j < data.lines.length; j++) {
        let l = data.lines[i];
        let m = data.lines[j];
        let pointCount = 0;
        for (let p of l.points) {
          if (m.contains(p)) {
            pointCount += 1;
          }
        }
        if (pointCount === 0) return false;
      }
    }
    return true;
  }

  euclideanParallelPostulate(data) {
    // For each line l
    for (let l of data.lines) {
      // and each point P
      for (let p of data.points) {
        // not on l
        if (!l.contains(p)) {
          // There exists exactly one line
          let lineCount = 0;
          for (let m of data.lines) {
            // distinct from l that contains p
            if (m !== l && m.contains(p)) {
              let pointOnL = false;
              for (let q of m.points) {
                if (l.contains(q)) {
                  pointOnL = true;
                  break;
                }
              }
              if (!pointOnL) lineCount += 1;
            }
            if (lineCount > 1) return false;
          }
          if (lineCount !== 1) return false;
        }
      }
    }
    return true;
  }
}
