const { fstat } = require("fs");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "Enter Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description",
        name: "description"
    }
])
.then(function(answers)
{
    console.log(answers);
    const generatedFile = generateMarkdown(answers);

});