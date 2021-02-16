
const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {

        super(name, id, email);
        this.phone = phone;
    }
}

    Manager.prototype.getRole = function () {
    return this.role = "Manager";
}

module.exports = Manager;