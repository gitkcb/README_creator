// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        message: "Tests for this project",
        name: "test",
    },
    {
        type: "list",
        message: "Choose your license for your application",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "Eclipse Public License", "The Unilicense"],
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
        .then((answer) => {
            let readmeContent = `
                # ${answer.title}

                # Table of Contents 
                 [Description](#description)
                 [Usage](#usage)
                 [Credits](#credits)
                 [License](#license)
                 [Tests](#tests)

                ## Description <a name="description"></a>
                ${answer.description}
                
                ## Usage
                ${answer.usage}

                ## Credits
                ${answer.contributors}

                ## License
                ${answer.license}

                ## Questions
                My GitHub Repo: https://github.com/${answer.github}
                Any further Questions reach me at ${answer.email}


                ## Tests
                ${answer.test}

`
    writeToFile("README.md", readmeContent);
    })
}

// Function call to initialize app
init();
