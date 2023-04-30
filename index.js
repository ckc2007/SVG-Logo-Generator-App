// Include the packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");
// require my template file
const generateTemplate = require("./template");

// create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three text characters to display:",
    validate: function (input) {
      return input.length <= 3
        ? true
        : "Please enter up to three characters only";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (e.g. white, red, #FF0000):",
  },
  {
    type: "list",
    name: "shape",
    message: "please select a shape from the following list:",
    choices: ["\u26AA Circle", "\u25B3 Triangle", "\u25A1 Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (e.g. yellow, purple, #0000FF):",
  },
];

// function writes file
// added a time stamp so that it doesn't keep overwriting the same logo.svg file name
function writeToFile(fileName, data) {
  const uniqueFileName = `examples/logo_${Date.now()}.svg`;
  fs.writeFile(uniqueFileName, data, (err) =>
    err ? console.error(err) : console.log("Success! Generated logo.svg")
  );
}
// function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filledTemplate = generateTemplate(data);

    const fileName = `examples/logo.svg`;
    writeToFile(fileName, filledTemplate, (err) =>
      err ? console.error(err) : console.log("Success! Generated logo.svg")
    );
  });
}

// call to initialize app
init();
