const Manager = require('./manager');
const inquirer = require('inquirer');

class Engineer extends Manager {
    constructor(name, id, email, phone, gitHub) {

        super(name, id, email, phone);
        this.gitHub = gitHub;
    }



}

module.exports = Engineer;