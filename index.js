const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: 'input',
        name:'GitHub',
        message: 'what is your Github username?',
    },

    {
        type: 'input',
        name:'Email',
        message: 'what is your Email Adress?',
    },

    {
        type: 'input',
        name:'Title',
        message:'what is your project title?',
    },

    {
        type: 'input',
        name:'Description',
        message:'What is your project description?',
    },

    {
        type:'list',
        name:'License',
        message:'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'none'],
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },

    {
        type: 'input',
        name:'Usage',
        message:'What does the user need to know about using the repo?',
    },

    {
        type: 'input',
        name :'Contributing',
        message: 'What does the user need to know about contributing to the repo?',
    }


];


//Function to write README file
function writeToFile(fileName, data) {
       return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
       console.log(`Generating README...`);
        writeToFile('NEWREADME.md', generateMarkdown({...response}))
})
}

// function call to initialize program
init();
