const Manager = require('./manager');

class Engineer extends Manager {
    constructor(name, id, email, username) {

        super(name, id, email);
        this.username = username;
    }
}

module.exports = Engineer;