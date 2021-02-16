const Manager = require("../lib/manager");

const questions = [
    "0. What is the employee's name?",
    "1. What is the employee's role?",
    "2. What is the employee's ID?",
    "3. What is the employee's email address?",
    "4. What is employee's phone number?",
    "5. What is the engineer's GitHub username?",
    "6. What school does the intern attend?"
];

const positions = ["Are they a manager?", "Are they an engineer?", "Are they an intern"]

module.exports = { questions, positions }