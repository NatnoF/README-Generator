// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

![GitHub license](https://img.shields.io/badge/license-${answers.licenseBadge}-blue.svg)

## Description 
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install use the following command
> ${answers.dependencies}

## Usage
${answers.using}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
To run tests use the following command 
> ${answers.tests}

## Questions
Have any questions? Reach out to me at ${answers.email} or https://github.com/${answers.github}
`;
}

module.exports = generateMarkdown;
