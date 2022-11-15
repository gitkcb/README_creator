const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
 }else{
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return 
    "https://lbesson.mit-license.org/"
  }
  else if(license === "Apache2.0"){
    return 
    `https://www.apache.org/licenses/LICENSE-2.0`
  }
  else if(license === "GNUv3.0"){
    return 
    `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }else if(license === "EPL"){
    return 
    `https://www.eclipse.org/legal/epl-2.0/`
  }else if(license === "Unilicense"){
    return 
    `https://unlicense.org/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

                ## Table of Contents 
                 [Description](#Description)
                 [Usage](#Usage)
                 [Credits](#Credits)
                 [License](#License)
                 [Tests](#Tests)

                ## Description
                ${data.description}
                
                ## Usage
                ${data.usage}

                ## Credits
                ${data.contributors}

                ## License
                ${data.license}
                ${renderLicenseSection(data.license)}

                ## Questions
                My GitHub Repo: https://github.com/${data.github}
                Any further Questions reach me at ${data.email}


                ## Tests
                ${data.test}



`;
}

module.exports = generateMarkdown;
