// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super("Engineer", 2, "engineer@gmail.com");
        this.github = github;
    }
    getGithub() {
        console.log(`Github: ${this.github}`);
    }
    getRole() {
        console.log(`Role: Engineer`);
    }
}