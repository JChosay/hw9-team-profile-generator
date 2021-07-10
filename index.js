const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')


function askForManagerInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'empname',
        },
        {
            type: 'input',
            message: "What is the team manager's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'office',
        }
    ])
    .then((answers) => {
        addAnEmployee();
    });
}

function askForEngineerInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'empname',
        },
        {
            type: 'input',
            message: "What is your engineer's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your engineer's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is your engineer's GitHub user name?",
            name: 'github',
        }
    ])
    .then((answers) => {
        addAnEmployee();
    });
}

function askForInternInfo(){
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'empname',
        },
        {
            type: 'input',
            message: "What is your intern's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your intern's email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What school does your intern attend?",
            name: 'school',
        }
    ])
    .then((answers) => {
        addAnEmployee();
    });
}

function addAnEmployee(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'emptype',
            choices: ['Engineer','Intern','Finished adding team members'],
        }
    ])
    .then((answers) => {
        if (answers.emptype === "Engineer"){
            askForEngineerInfo();
        }else if (answers.emptype === "Intern"){
            askForInternInfo();
        }else{
            console.log("Thanks for playing, guy!");
        }
    })
}

function init(){
    console.log("Hello! Welcome to Team Builder 5000, a product of FRUOsoft.");
    askForManagerInfo();
}

init();