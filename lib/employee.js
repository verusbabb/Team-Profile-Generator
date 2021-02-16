const Manager = require("./manager");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
}

Employee.prototype.getName = () => {
    return this.name;
}

Employee.prototype.getId = () => {
    return this.id;
}

Employee.prototype.getEmail = () => {
    return this.email
}

Employee.prototype.getRole = () => {
    return this.role = "Employee";
}

module.exports = Employee;