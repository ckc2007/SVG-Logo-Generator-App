const Circle = require("../circle");

describe("Circle", () => {
  it("should render a circle with a specific color", () => {
    const circle = new Circle("red");
    const renderedCircle = circle.render();
    expect(renderedCircle).toContain('fill="red"');
  });

  it("should render a circle with a specific hexadecimal color code", () => {
    const circle = new Circle("#FF00FF");
    const renderedCircle = circle.render();
    expect(renderedCircle).toContain('fill="#FF00FF"');
  });
});
