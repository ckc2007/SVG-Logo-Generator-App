const Shape = require("./shape");

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  getShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
