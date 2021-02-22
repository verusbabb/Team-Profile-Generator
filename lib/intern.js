//intern sub-class constructor
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
}

Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function () {
    return this.role;
}

module.exports = Intern;