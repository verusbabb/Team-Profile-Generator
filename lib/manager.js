
const Employee = require('./employee');
// const { role } = require('./intern');

class Manager extends Employee {
    constructor(name, id, email, phone, role) {

        super(name, id, email);
        this.phone = phone;
        this.role = role
    }
}

Manager.prototype.getRole = () => {
    return "Manager"
}

module.exports = Manager;