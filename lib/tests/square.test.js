const Square = require("../square");

describe("Square", () => {
  it("should render a square with a specific color", () => {
    const square = new Square("red");
    const renderedSquare = square.render();
    expect(renderedSquare).toContain('fill="red"');
  });

  it("should render a square with a specific hexadecimal color code", () => {
    const square = new Square("#FF00FF");
    const renderedSquare = square.render();
    expect(renderedSquare).toContain('fill="#FF00FF"');
  });
});
