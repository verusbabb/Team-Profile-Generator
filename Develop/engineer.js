const Manager = require('./manager');

class Engineer extends Manger {
    constructor(name, id, email, phone, gitHub) {

        super(name, id, email, phone);
        this.gitHub = gitHub;
    }

}