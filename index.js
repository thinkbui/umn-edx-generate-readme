const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const output_filename = "OUTPUT.md";

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter the title of your project:",
    name: "title"
  },
  {
    type: "input",
    message: "Please enter your project's description:",
    name: "description"
  },
  {
    type: "confirm",
    message: "Add table of contents?:",
    name: "show_table_of_contents"
  },
  {
    type: "input",
    message: "Please enter your project's installation instruction:",
    name: "installation"
  },
  {
    type: "input",
    message: "Please enter your project's usage instructions:",
    name: "usage"
  },
  {
    type: "list",
    message: "Select your project's license:",
    name: "license",
    choices: ["(none)", "GNU GPL v3", "MIT", "Mozilla"]
  },
  {
    type: "input",
    message: "Please enter your project's contribution guidelines:",
    name: "contributing"
  },
  {
    type: "input",
    message: "Please enter your GitHub name:",
    name: "github"
  },
  {
    type: "input",
    message: "Please enter your project's testing instructions:",
    name: "testing"
  },
  {
    type: "confirm",
    message: "Output to file?:",
    name: "output_to_file"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response)
      let generated_content = generateMarkdown(response)
      if (response.output_to_file) {
        console.log(`Generating output file (${output_filename}).`)
        writeToFile(output_filename, generated_content)
      } else {
        console.log("New README contents:")
        console.log(generated_content)
      }
    });
}

// Function call to initialize app
init();
