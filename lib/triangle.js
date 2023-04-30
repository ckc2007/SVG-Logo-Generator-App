const Shape = require("./shape");

class Triangle extends Shape {
  render() {
    return `<polygon points="150,20 75,180 225,180" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
