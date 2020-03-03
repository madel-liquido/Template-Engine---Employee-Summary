const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super("manager", 1, "manager@gmail.com");
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`)
        return this.officeNumber;
    };
    getRole() {
        console.log(`Role: Manager`);
        return "Manager";
    }
}

module.exports = Manager;