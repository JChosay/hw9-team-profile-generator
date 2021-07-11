const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')
const util = require('util');
const cheerio = require('cheerio');
var manager = [];
var engineer = [];
var intern = [];
const writeFileAsync = util.promisify(fs.writeFile);
// const newPage = createHTMLDocument('index.html');
// const newHeader = createHTMLDocument('header.html');
// const newManager = createHTMLDocument('manager.html');
// const newEngineer = createHTMLDocument('engineer.html');
// const newIntern = createHTMLDocument('intern.html');
var sectionEngineer = []
var sectionIntern = []

const sectionHeader = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Document</title>
    </head>
    <body>
    <div class="container-fluid pt-3 pb-3">
        <!--Heading Jumbotron-->
        <div class="jumbotron jumbotron-fluid mb-1 bg-warning">
            <div class="container">
                <h1 class="display-4">Your Team</h1>
                <p class="lead">What a bunch.</p
            </div>
        </div>`

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
        manager = answers;
        sectionManager = 
        `
        <div id="manager" class="container-fluid d-flex flex-row bg-dark pt-3">
            <div class="col-12 col-sm-6 col-md-3 mb-3 pt-3">
                <!-- //Manager Card// -->
                <div class="card">
                    <h4 class="card-header text-center pt-3 pb-1">${manager.empname}</h4>
                    <h6 class="card-subtitle text-center pt-3 pb-0">Manager</h6>
                    <div class="card-body mt-0 pt-1">              
                        <div class="card" style="background-color:black;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="background-color: aquamarine;">ID Number: ${manager.id}</li>
                                <li class="list-group-item" style="background-color: aquamarine;">Office number: ${manager.office}</li>
                            </ul>
                        </div>
                    
                        <button class="btn btn-primary btn-block">Email Address: ${manager.email}</button>
                    </div>
                </div><!--Closes individual manager card-->
            </div><!--closes container class-->
        </div><!--closes manager card div-->
        `
        console.log(sectionManager);

        // const htmlContent = generateManager(manager);
        // fs.writeFile('newManager', htmlContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully generated your HTML file, jerk.'))
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
        var newEngineer = answers
        // var arrayContent = engineer
        // engineer = arrayContent.concat(newEngineer);
        var tempText = 
        `
            <div class="card">
                <h4 class="card-header text-center pt-3 pb-1">${newEngineer.empname}</h4>
                <h6 class="card-subtitle text-center pt-3 pb-0">Engineer</h6>
                
                <div class="card-body mt-0 pt-1">              
                    <div class="card" style="background-color:black;">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="background-color: aquamarine;">ID Number: ${newEngineer.id}</li>
                    </div>
                
                <button class="btn btn-primary btn-block mt-1">GitHub User Name: ${newEngineer.github}</button>
                
                <button class="btn btn-primary btn-block mt-1">Email Address: ${newEngineer.email}</button>
            </div><!--closes individual engineer card-->
        
        `
    
        var arrayContent = sectionEngineer;
        sectionEngineer = arrayContent + tempText;
        // sectionEngineer = arrayContent.concat(tempText);
        console.log(sectionEngineer);

        addAnEmployee();
    })
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
        var newIntern = answers
        var tempText = 
        `
            <div class="card d-flex">
                <h4 class="card-header text-center pt-3 pb-1">${newIntern.empname}</h4>
                <h6 class="card-subtitle text-center pt-3 pb-0">Intern</h6>
                
                <div class="card-body mt-0 pt-1">              
                    <div class="card" style="background-color:black;">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="background-color: aquamarine;">ID Number: ${newIntern.id}</li>
                        <li class="list-group-item" style="background-color: aquamarine;">School: ${newIntern.school}</li>
                        </ul>
                </div>
        
                <button class="btn btn-primary btn-block mt-1">Email Address: eatit@whatever.edu</button>
            </div><!--closes individual intern card-->
        `
        // var arrayContent = intern
        // intern = arrayContent.concat(newIntern);
        
        var arrayContent = sectionIntern;
        sectionIntern = arrayContent + tempText;
        console.log(sectionIntern);

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
            buildPage();
        }
    })
}

function init(){
    console.log("Hello! Welcome to Team Builder 5000, a product of FRUOsoft.");
    askForManagerInfo();
}

init();

function buildPage(){
    // console.log("Manager:");
    // console.log(manager);
    // console.log("Engineers:");
    // console.log(engineer);
    // console.log("Interns:");
    // console.log(intern);
    var splice1 = `
    <div id='main'>
            <!--Manager DIV-->
            <div id="manager" class="container-fluid d-flex flex-row bg-dark pt-3">
                <div class="col-12 col-sm-6 col-md-3 mb-3 pt-3"></div>
    `

    var splice2 = `
                </div><!--closes container class-->
            </div><!--closes manager card div-->

            <!--engineer DIV-->
            <div id="engineer" class="container-fluid bg-dark">
                <div class="col-12 col-sm-6 col-md-3 mb-3 pt-3 d-flex">
    `

    var splice3 = `
                </div><!--closes engineer container class-->
            </div><!--closes engineer DIV-->

            <div id="intern" class="container-fluid bg-dark pb-3 d-flex">
                <!-- <div class="col-12 col-sm-6 col-md-3 mb-3 pt-3 d-flex flex-row"> -->
    `

    var splice4 = `

                </div><!--closes intern container class-->
            </div><!--closes Intern DIV-->
        </div>
    </div><!-- /*closes main container-fluid*/ -->
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

</html>
`
const htmlRaw = [sectionHeader+splice1+sectionManager+splice2+sectionEngineer+splice3+sectionIntern+splice4];

// htmlRaw = htmlRaw.replace(/(\n)/gm,"");
html = htmlRaw.toString();
// html = html.replace(/"\n'","");
console.log(html);
    

}
