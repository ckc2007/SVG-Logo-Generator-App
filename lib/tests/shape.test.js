const Shape = require("../shape");

describe("Shape", () => {
  it("should render an empty string", () => {
    const shape = new Shape("red");
    const renderedShape = shape.render();
    expect(renderedShape).toEqual("");
  });
});
