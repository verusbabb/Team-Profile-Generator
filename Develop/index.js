//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
// const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const questions = require('../src/questions.js');

addManager();

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
        {
            name: 'addMore',
            type: 'checkbox',
            message: questions.managerQs[4],
            choices: questions.whatNext
        }
    ])
        .then((data) => {
            var manager = new Manager(data.name, data.id, data.email, data.phone)

            console.log("OK, but first, this is you...");
            console.log(manager);

            if (data.addMore.toString() === questions.whatNext[0]) {
                addEngineer();
            }

            else (data.addMore.toString() === questions.whatNext[1]) ? addIntern() : console.log("done building team"); //will replace this log with generateHTML() after generateHTML() is written.
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
            console.log("OK, this is your new engineer...");
            console.log(engineer);
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
            console.log("OK, this is your new intern...");
            console.log(intern);
        })
};
