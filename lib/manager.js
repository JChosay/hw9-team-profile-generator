const Employee = require("./employee");

class Manager extends Employee {
    constructor(empname, id, email, office){
        super(empname, id, email, "office");

        this.office = office;
    }
}

module.exports = Manager;