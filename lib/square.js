const Shape = require("./shape");

class Square extends Shape {
  render() {
    return `<rect x="60" y="40" width="180" height="120" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
