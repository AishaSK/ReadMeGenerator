const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for user
const questions = [
    {
        type: 'input', 
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input', 
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input', 
        name: 'title',
        message: 'What is your project Title?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What license will your project have?',
        choices: ["MIT", "APACHE2.0", "GPL 3.0", "None"]
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'Please select What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input', 
        name: 'test',
        message: 'What command should be used to run a test?',
        default: 'npm test'
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

//  write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initiate program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Generating README...`);
        writeToFile('NewREADME.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();