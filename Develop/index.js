//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./generateHTML');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const questions = require('../src/questions.js');


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
            console.log("engineer or intern or exit program"); //test code
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


