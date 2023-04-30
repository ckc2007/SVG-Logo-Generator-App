const Shape = require("./shape");

class Triangle extends Shape {
  getShape() {
    return `<polygon points="150,20 75,180 225,180" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
