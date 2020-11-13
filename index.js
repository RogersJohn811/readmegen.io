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
            type: "list",
                message: "Choose a license: ",
                name: "licenses",
                choices: [
                   "MIT License",
                   "Apache License 2.0",
                   "Boost Software License 1.0",
                   "Mozilla Public License 2.0"
                ]
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

async function writeReadMe() {

    const {
        name,
        description,
        installation,
        usage,
        contribution,
        test,
        licenses,
        email,
        github
    } = await getUserInput();

    const lic = lics.getLicense(licenses);

    const myMarkdown =
    `
# ${name}

## License
${lic} | This app is licensed under ${licenses}

## Table of Contents
- [Licensing Information](#License)
- [Description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Tests
${test}

## Questions
[Send me an email](mailto:${email})

[Visit my Github profile](https://github.com/${github})
`

fs.writeFile("./generated-file/README.md", myMarkdown, (err) =>
    err ? console.log(err) : console.log("ReadMe.md created successfully!")
);
}

writeReadMe();