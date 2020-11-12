const inquirer = require('inquirer');
const fs = require('fs');
const license = require('./licenses');

async function getUserInput() {

    try {
        const data = await inquirer.prompt([{
            type: "input",
            message: "Application name: ",
            name: "name",
        },
        {
            type: "input",
            message: "Application description: ",
            name: "description",
        },
        {
            type: "input",
            message: "Installation Instructions: ",
            name: "installation",
        },
        {
            type: "input",
            message: "Usage Instructions: ",
            name: "usage",
        },
        {
            type: "input",
            message: "Contribution guidelines: ",
            name: "contributiion",
        },
        {
            type: "input",
            message: "Testing instructions: ",
            name: "test",
        },
        {

        },
        {
            type: "input",
            message: "Enter your email address: ",
            name: "email",
        },
        {
            type: "input",
            message: "Enter your Github username: ",
            name: "Github",
        },

        ]);
        return data;
    } catch (error){
        console.log(err) 
    }
}

