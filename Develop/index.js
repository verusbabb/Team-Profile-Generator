//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./generateHTML');
const Manager = require('./manager');
// const engineer = require('./engineer');
// const intern = require('./intern');

const questions = [
    '0. What is your name?',
    '1. What is your employer ID #?',
    '2. What is your email?',
    '3. What is your phone number?',
    '4. What would you like to do?',
    '5. What is your engineers name?',
    '6. What is your engineers employee id?',
    '7. What is your engineers email?',
    '8. What is your engineers username?',
    '9. What is your interns name?',
    '10. What is your interns employee id?',
    '11. what is your interns email?',
    '12. What school is your intern attending?'
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
                            message: questions[8],
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


