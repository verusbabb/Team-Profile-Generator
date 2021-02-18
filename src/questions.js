const Manager = require("../lib/manager");

const managerQs = [
    "0. What is your name?",
    "1. What is your employee ID?",
    "2. What is your email address?",
    "3. What is your phone number?",
    "4. Would you like to add another employee to your team?"
];

const engineerQs = [
    "0. What is the new engineer's name?",
    "1. What is the new engineer's ID?",
    "2. What is the new engineer's email address?",
    "3. What is the new engineer's GitHub username?"
]

const internQs = [
    "0. What is the new intern's name?",
    "1. What is the new intern's ID?",
    "2. What is the new intern's email address?",
    "3. What school is the new intern from?"
]



const whatNext = ["Yes, add an engineer", "Yes, add an intern", "No, I'm done building my team"];



module.exports = { managerQs, engineerQs, internQs, whatNext }