const Triangle = require("../triangle");

describe("Triangle", () => {
  it("should render a triangle with a specific color", () => {
    const triangle = new Triangle("red");
    const renderedTriangle = triangle.render();
    expect(renderedTriangle).toContain('fill="red"');
  });

  it("should render a triangle with a specific hexadecimal color code", () => {
    const triangle = new Triangle("#FF00FF");
    const renderedTriangle = triangle.render();
    expect(renderedTriangle).toContain('fill="#FF00FF"');
  });
});
