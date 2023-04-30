const Circle = require("../circle");
const Square = require("../square");
const Triangle = require("../triangle");
const generateTemplate = require("../../template");

describe("generateTemplate", () => {
  it("should generate an SVG string containing the user input text", () => {
    const data = {
      text: "ABC",
      textColor: "red",
      shape: "\u26AA Circle",
      shapeColor: "blue",
    };
    const result = generateTemplate(data);
    expect(result).toContain(
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>`
    );
  });
});
