const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

function generateTemplate(data) {
  let shape;
  switch (data.shape) {
    case "\u26AA Circle":
      shape = new Circle(data.shapeColor);
      break;
    case "\u25B3 Triangle":
      shape = new Triangle(data.shapeColor);
      break;
    case "\u25A1 Square":
      shape = new Square(data.shapeColor);
      break;
    default:
      throw new Error("Invalid shape selected");
  }
  return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render(data.shapeColor)}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
      data.textColor
    }">${data.text}</text>
  </svg>`;
}

module.exports = generateTemplate;
