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
    'What is your phone number?'
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
        var manager1 = new Manager(`${data.name}, ${data.employer_id}, ${data.email}, ${data.phone}`)
        // console.log(typeof data);
        // console.log(data);
        // console.log(`${data.name}, ${data.employer_id}, ${data.email}, ${data.phone}`)
        console.log(manager1);
    })


