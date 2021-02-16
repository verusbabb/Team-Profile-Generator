const { engineerQs } = require('../src/questions');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;
    }
}

    Engineer.prototype.getRole = () => {
    return "Engineer";
    }
    
    Engineer.prototype.getGitHub = function () {
        return this.gitHub;
    }

module.exports = Engineer;