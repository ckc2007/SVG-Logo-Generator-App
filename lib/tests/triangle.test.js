const Triangle = require("../triangle");

test("renders a blue triangle", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="150,20 75,180 225,180" fill="blue" />'
  );
});
