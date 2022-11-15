const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
 }else{
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


                # Table of Contents 
                 [Description](#description)
                 [Usage](#usage)
                 [Credits](#credits)
                 [License](#license)
                 [Tests](#tests)

                ## Description <a name="description"></a>
                ${data.description}
                
                ## Usage
                ${data.usage}

                ## Credits
                ${data.contributors}

                ## License
                ${data.license}

                ## Questions
                My GitHub Repo: https://github.com/${data.github}
                Any further Questions reach me at ${data.email}


                ## Tests
                ${data.test}



`;
}

module.exports = generateMarkdown;
