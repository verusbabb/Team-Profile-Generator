const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;
    }
}

    Engineer.prototype.getRole = function () {
    return this.role = "Engineer";
    }
    
    Engineer. prototype.getGitHub = () => {
        return this.gitHub;
    }

module.exports = Engineer;