// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super("Intern", 3, "intern@gmail.com");
        this.school = school;
    }
    getSchool() {
        console.log(`Github: ${this.school}`);
    }
    getRole() {
        console.log(`Role: Intern`);
    }
}