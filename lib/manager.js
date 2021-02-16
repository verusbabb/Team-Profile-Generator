
const Employee = require('./employee');
// const { role } = require('./intern');

class Manager extends Employee {
    constructor(name, id, email, phone) {

        super(name, id, email);
        this.phone = phone;
    }
}

    Manager.prototype.getRole = () => {
    return "Manager"
}

module.exports = Manager;