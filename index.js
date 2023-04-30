// Include the packages needed for this app
const inquirer = require("inquirer");
const fs = require("fs");
// require my template file
const generateTemplate = require("./template");

// create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "enter up to three characters for the name:",
  },
  {
    type: "input",
    name: "text color",
    message:
      "what color do you want the text to be (enter a color keyword or a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "please select a shape from the following list:",
    choices: ["\u26AA Circle", "\u25B3 Triangle", "\u25A1 Square"],
  },
  {
    type: "input",
    name: "shape color",
    message:
      "what color do you want the shape to be (please enter a color keyword or a hexadecimal number):",
  },
];
