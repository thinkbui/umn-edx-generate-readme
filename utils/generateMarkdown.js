const licenses = {
  "GNU GPL v3":{
    "text": "GNU GPL v3.",
    "link": "https://www.gnu.org/licenses/gpl-3.0",
    "badge": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "alt": "GPL v3"
  },
  "MIT":{
    "text": "the MIT License.",
    "link": "https://opensource.org/licenses/MIT",
    "badge": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "alt": "MIT"
  },
  "Mozilla":{
    "text": "Mozilla Public License 2.0.",
    "link": "https://opensource.org/licenses/MPL-2.0",
    "badge": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    "alt": "MPL 2.0"
  }
}

function renderLicenseText(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["text"]
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["badge"]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["link"]
}

function renderLicenseAlt(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["alt"]
}

function getLicenseData(license) {
  return licenses[license]
}

function buildLicenseBadge(license) {
  if (!license || license == "(none)"){
    return ""
  }
  return `\n[![License: ${renderLicenseAlt(license)}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})\n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license == '(none)') {
    return ""
  }
  let section_string = "\n## LICENSE\nThis project is covered under "
  section_string += `[${licenses[license]["text"]}](${licenses[license]["link"]})`
  section_string += "\n"
  return section_string
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${buildLicenseBadge(data.license)}
## DESCRIPTION
${data.description}
${renderTableOfContents(data)}
## INSTALLATION
${data.installation}

## USAGE
${data.usage}
${renderLicenseSection(data.license)}
## CONTRIBUTING
${data.contributing}

## QUESTIONS
Visit my [GitHub page](https://github.com/${data.github}/) for more information.

## TESTS
${data.testing}
`;
}

function renderTableOfContents(data) {
  if (!data.show_table_of_contents) {
    return ""
  }
  let content_string = "\n## TABLE OF CONTENTS\n"
  content_string += "- [Installation](#INSTALLATION)\n"
  content_string += "- [Usage](#USAGE)\n"
  if (data.license && getLicenseData(data.license)) {
    content_string += "- [License](#LICENSE)\n"
  }
  content_string += "- [Contributing](#CONTRIBUTING)\n"
  content_string += "- [Questions](#QUESTIONS)\n"
  content_string += "- [Tests](#TESTS)\n"

  return content_string
}

module.exports = generateMarkdown;
