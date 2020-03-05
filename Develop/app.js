const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let teamMembers = [];


function addingEmployee() {
    const addingEmployee = [{
        type: "list",
        message: "Would you like to add an employee?",
        choices: ["yes", "no"],
        name: "addingEmployee"
    }]
    inquirer.prompt(addingEmployee).then(res => {
        if (res.addingEmployee == "yes") {
            chooseEmployeeRole();
        } else {
            return createTeam();
        }
    })


    async function chooseEmployeeRole() {
        const employeeRole = [{
            type: "list",
            message: "What is the team member's role?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employeeRole"
        }];
        await inquirer.prompt(employeeRole).then(res => {
            if (res.employeeRole == "Manager") {
                addManager();
            } else if (res.employeeRole == "Engineer") {
                addEngineer();
            } else {
                addIntern();
            }
        })

    }
}


async function addManager() {
    const managerQuestions = [{
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"

        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ]
    await inquirer.prompt(managerQuestions).then(res => {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        teamMembers.push(manager);
        addingEmployee();
    })
}

async function addEngineer() {
    const engineerQuestions = [{
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"

        },
        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github"
        }

    ]
    inquirer.prompt(engineerQuestions).then(res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github);
        teamMembers.push(engineer);
        addingEmployee();
    })
}

async function addIntern() {
    const internQuestions = [{
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"

        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
        }
    ]
    inquirer.prompt(internQuestions).then(res => {
        const intern = new Intern(res.name, res.id, res.email, res.school);
        teamMembers.push(intern);
        addingEmployee();
    })
}

addingEmployee();

async function createTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
}