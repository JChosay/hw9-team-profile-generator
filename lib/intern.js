const Employee = require("./employee");

class Intern extends Employee {
    constructor(empname, id, email, school){
        super(empname, id, email, "school");

        this.school = school;
    }
}

module.exports = Intern;