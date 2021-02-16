const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }
}

    Intern.prototype.getSchool = () => {
    return this.school;
}

    Intern.prototype.getRole = () => {
    return this.role = "Intern";
}

module.exports = Intern;