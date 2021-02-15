//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./generateHTML');
const Manager = require('./manager');
// const engineer = require('./engineer');
// const intern = require('./intern');

const questions = [
    'What is your name?',
    'What is your employer ID #?',
    'What is your email?',
    'What is your phone number?',
    'What would you like to do?',
    'What is your GitHub username?',
    'What school are you attending?'
]

inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: questions[0],
        },
        {
            name: 'employer_id',
            type: 'input',
            message: questions[1],
        },
        {
            name: 'email',
            type: 'input',
            message: questions[2],
        },
        {
            name: 'phone',
            type: 'input',
            message: questions[3],
        }

    ])

    .then((data) => {

        var manager1 = new Manager(data.name, data.employer_id, data.email, data.phone)
        console.log(manager1)
        inquirer.prompt([
            {
                name: 'task',
                type: 'checkbox',
                message: questions[4],
                choices: ["Add an engineer", "Add an Intern", "Exit the program"]
            }

        ])
            .then((data) => {
                if (data.task[0] === "Add an engineer") {
                    console.log("add an engineer")
                    inquirer.prompt([
                        {
                            name: 'name',
                            type: 'input',
                            message: questions[0],
                        },
                        {
                            name: 'employer_id',
                            type: 'input',
                            message: questions[1],
                        },
                        {
                            name: 'email',
                            type: 'input',
                            message: questions[2],
                        },
                        {
                            name: 'username',
                            type: 'input',
                            message: questions[5],
                        }
                    ])
                        .then((data) => {
                            console.log(data);
                            // var engineer1 = new Engineer(data.name, data.employer_id, data.email, data.username)
                            // console.log(engineer1)
                        })
                }
                else if (data.task[0] === "Add an Intern") {
                    console.log("eventually will be directed to go to add an intern prompts")

                }

                else {
                    console.log("eventually will trigger set-up to print html")
                }

            })
    })


