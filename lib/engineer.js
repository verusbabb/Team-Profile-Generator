const { engineerQs } = require('../src/questions');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;
        this.role = "Engineer"
    }
}

    Engineer.prototype.getRole = function() {
    return this.role;
    }
    
    Engineer.prototype.getGitHub = function () {
        return this.gitHub;
    }

module.exports = Engineer;