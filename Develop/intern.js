const Manager = require('./manager');

class Intern extends Manger {
    constructor(name, id, email, phone, school) {

        super(name, id, email, phone);
        this.school = school;
    }

}

module.exports = Intern;