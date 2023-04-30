const Circle = require("../circle");
const Square = require("../square");
const Triangle = require("../triangle");
const generateTemplate = require("../../template");

describe("generateTemplate", () => {
  it("should throw an error when an invalid shape is selected", () => {
    const data = {
      text: "ABC",
      textColor: "red",
      shape: "invalid shape",
      shapeColor: "blue",
    };
    expect(() => {
      generateTemplate(data);
    }).toThrow("Invalid shape selected");
  });
});
