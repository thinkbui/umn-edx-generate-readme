const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the title of your project: ",
    name: "title"
  },
  {
    type: "input",
    message: "Please enter your project's description: ",
    name: "description"
  },
  {
    type: "confirm",
    message: "Add table of contents?: ",
    name: "show_table_of_contents"
  },
  {
    type: "input",
    message: "Please enter your project's installation instruction: ",
    name: "installation"
  },
  {
    type: "input",
    message: "Please enter your project's usage instructions: ",
    name: "usage"
  },
  {
    type: "list",
    message: "Select your project's license: ",
    name: "license",
    choices: ["(none)", "GNU GPL v3", "MIT", "Mozilla"]
  },
  {
    type: "input",
    message: "Please enter your project's contribution guidelines: ",
    name: "contributing"
  },
  {
    type: "input",
    message: "Please enter your project's testing instructions: ",
    name: "testing"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response)
      console.log(generateMarkdown(response))
      // fs.writeFile('OUTPUT.md', generateMarkdown(response), (err) =>
      //   err ? console.error(err) : console.log('Success!')
      // )
    });
}

// Function call to initialize app
init();
