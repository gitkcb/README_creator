// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title",
    },
    {
        type: "input",
        message: "What is this project about?",
        name: "description",
    },
    {
        type: "input",
        message: "How do you use this application?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "What are the tests for this project?",
        name: "test",
    },
    {
        type: "list",
        message: "Choose your license for your application",
        name: "license",
        choices: ["Apache2.0", "GNUv3.0", "MIT", "EPL", "Unlicense"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Information has been saved"))
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./README.md', markdown);
        
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
