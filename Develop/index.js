//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./generateHTML');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const questions = require('../src/questions.js');
// const Inputs = require('../src/inputs');

// const questions = [
//     '0. What is your name?',
//     '1. What is your employer ID #?',
//     '2. What is your email?',
//     '3. What is your phone number?',
//     '4. What would you like to do?',
//     '5. What is your engineers name?',
//     '6. What is your engineers employee id?',
//     '7. What is your engineers email?',
//     '8. What is your engineers username?',
//     '9. What is your interns name?',
//     '10. What is your interns employee id?',
//     '11. what is your interns email?',
//     '12. What school is your intern attending?'
// ]

inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: questions.questions[0],
        },
        {
            name: 'id',
            type: 'input',
            message: questions.questions[2],
        },
        {
            name: 'email',
            type: 'input',
            message: questions.questions[3],
        },
        {
            name: 'phone',
            type: 'input',
            message: questions.questions[4],
        },
        {
            name: 'role',
            type: 'checkbox',
            message: questions.questions[1],
            choices: questions.positions
        }

    ])

    .then((data) => {

        console.log(data.name, data.id, data.email, data.phone, data.role.toString());
        if (data.role.toString() === questions.positions[0]) {
            var manager1 = new Manager(data.name, data.id, data.email, data.phone, data.role.toString())
            console.log(manager1, manager1.getRole());
        }
        else {
            console.log("engineer or intern");
        }
    });
        // inquirer.prompt([
        //     {
        //         name: 'task',
        //         type: 'checkbox',
        //         message: questions[4],
        //         choices: ["Add an engineer", "Add an Intern", "Exit the program"]
        //     }

        // ])
    //         .then((data) => {
    //             if (data.task[0] === "Add an engineer") {
    //                 console.log("add an engineer")
    //                 inquirer.prompt([
    //                     {
    //                         name: 'name',
    //                         type: 'input',
    //                         message: questions[5],
    //                     },
    //                     {
    //                         name: 'id',
    //                         type: 'input',
    //                         message: questions[6],
    //                     },
    //                     {
    //                         name: 'email',
    //                         type: 'input',
    //                         message: questions[7],
    //                     },
    //                     {
    //                         name: 'gitHub',
    //                         type: 'input',
    //                         message: questions[8],
    //                     }
    //                 ])
    //                     .then((data) => {
    //                         var engineer1 = new Engineer(data.name, data.id, data.email, data.gitHub)
    //                         console.log(engineer1)
    //                     })
    //             }
    //             else if (data.task[0] === "Add an Intern") {
    //                 console.log("eventually will be directed to go to add an intern prompts")

    //             }

    //             else {
    //                 console.log("eventually will trigger set-up to print html")
    //             }

    //         })
    // })


