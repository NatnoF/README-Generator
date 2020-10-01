const { fstat } = require("fs");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of your project: ",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero Genral Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        message: "Enter the command that should be run to install dependencies: ",
        name: "dependencies"
    },
    {
        type: "input",
        message: "Enter the command that should be run to run tests: ",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo? ",
        name: "using"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo? ",
        name: "contributing"
    }
])
.then(function(answers)
{
    console.log(answers);
    const generatedFile = generateMarkdown(answers);

    // fs.writeFile("README.md", generatedFile, function(err)
    // {
    //     if (err)
    //     {
    //         throw err;
    //     }
    //     else
    //     {
    //         console.log("Successfully Created your README file!");
    //     }
    // });
});