
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {

        super(name, id, email);
        this.phone = phone;
        this.role = "Manager"
    }
}

    Manager.prototype.getRole = function () {
    return this.role;
}

module.exports = Manager;