// License data
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

// Helper to fetch display text for license
function renderLicenseText(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["text"]
}

// Helper to fetch badge url for license
function renderLicenseBadge(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["badge"]
}

// Helper to fetch link url for license
function renderLicenseLink(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["link"]
}

// Helper to fetch alt badge text for license
function renderLicenseAlt(license) {
  if (!license){
    return ""
  }
  return getLicenseData(license)["alt"]
}

// Helper to fetch license data
function getLicenseData(license) {
  return licenses[license]
}

// Helper to build the full display badge for license
function buildLicenseBadge(license) {
  if (!license || license == "(none)"){
    return ""
  }
  return `\n[![License: ${renderLicenseAlt(license)}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})\n`
}

// Helper to build the license section including the appropriate link
function renderLicenseSection(license) {
  if (!license || license == '(none)') {
    return ""
  }
  let section_string = "\n## LICENSE\nThis project is covered under "
  section_string += `[${licenses[license]["text"]}](${licenses[license]["link"]})`
  section_string += "\n"
  return section_string
}

// Helper to build the table of contents section
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

// This the main generator function to build the README content
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
Visit my [GitHub page](https://github.com/${data.github}/) or [email me](mailto:${data.email}) for questions and more information.

## TESTS
${data.testing}
`;
}

module.exports = generateMarkdown;
