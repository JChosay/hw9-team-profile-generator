const Employee = require("./employee");

class Engineer extends Employee {
    constructor(empname, id, email, github){
        super(empname, id, empname, "github");

        this.github = github;
    }
}

module.exports = Engineer;