//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const questions = require('./src/questions.js');

const myTeam = [];

addManager();

function continueBuilding() {
    inquirer.prompt([
        {
            name: 'continue',
            type: 'checkbox',
            message: questions.managerQs[4],
            choices: questions.whatNext
        }
    ])
        .then((data) => {
            if (data.continue.toString() === questions.whatNext[0]) {
                addEngineer();
            }

            else if (data.continue.toString() === questions.whatNext[1]) {
                addIntern();
            }

            else {
                console.log("Done building Team");
                console.log(myTeam);
                var htmlContent = generateHTML(myTeam)
                console.log(htmlContent);
                writeToFile(htmlContent);
            }
        });
}

function addManager() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: questions.managerQs[0],
        },
        {
            name: 'id',
            type: 'input',
            message: questions.managerQs[1],
        },
        {
            name: 'email',
            type: 'input',
            message: questions.managerQs[2],
        },
        {
            name: 'phone',
            type: 'input',
            message: questions.managerQs[3],
        },
    ])
        .then((data) => {
            var manager = new Manager(data.name, data.id, data.email, data.phone)

            console.log("This is you...");
            console.log(manager);
            myTeam.push(manager);

            continueBuilding();
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: questions.engineerQs[0],
            },
            {
                name: 'id',
                type: 'input',
                message: questions.engineerQs[1],
            },
            {
                name: 'email',
                type: 'input',
                message: questions.engineerQs[2],
            },
            {
                name: 'gitHub',
                type: 'input',
                message: questions.engineerQs[3],
            }
        ])

        .then((data) => {

            var engineer = new Engineer(data.name, data.id, data.email, data.gitHub)
            console.log("OK, this is your newly added engineer...");
            console.log(engineer);
            myTeam.push(engineer);
            continueBuilding();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: questions.internQs[0],
            },
            {
                name: 'id',
                type: 'input',
                message: questions.internQs[1],
            },
            {
                name: 'email',
                type: 'input',
                message: questions.internQs[2],
            },
            {
                name: 'school',
                type: 'input',
                message: questions.internQs[3],
            }
        ])

        .then((data) => {
            var intern = new Intern(data.name, data.id, data.email, data.school)
            console.log("OK, this is your newly added intern...");
            console.log(intern);
            myTeam.push(intern);
            continueBuilding();
        })
};

function writeToFile(data) {
    fs.writeFile('./index.html', data, (err) =>
        err ? console.log(err) : console.log('Successfully generated html'));
}

