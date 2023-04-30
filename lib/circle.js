const Shape = require("./shape");

class Circle extends Shape {
  getShape() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

module.exports = Circle;
