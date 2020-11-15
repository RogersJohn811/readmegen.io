# ReadMeGen

## Description

ReadMeGen is a readme generator application running in node.js. This is a CLI application, which will prompt the users for various parts of a readme file and then build that readme based on the supplied input.

**NPM Packages Used** : [inquirer](https://www.npmjs.com/package/inquirer)

**What does a generated ReadMe.MD contain?**

-Title of Project
-License
-Description
-Table of Contents
-Installation
-Usage
-Contributing
-Tests
-Questions

## Installation
**Clone the repo**
...
  $ git clone git@github.com:HishamKader/rut-hw7-readmegen.git
...

**Install the necessary node packages**
...
$ npm install
...

## Usage
**Run the application**

...
$ node index.js
...

## Contribution
* Download the repository using the installation instructions above
* Contributors may not push to the main branch, create your own branch and perform a pull request.
* Pull request should outline main changes made and should not deconstruct the basic logic.
* Project is running on inquirer read the docs before you get started.

## Tests
This is a relatively straight forward application. To test, run the test on the file that is producing the functionality in question. To test license image issues:
...
$ node licenses.js
...

To test the application in general
...
$ node index.js
...

Video installation Guide
[Video Link]https://drive.google.com/file/d/1Czf-xMmR0TFjK4-PDbgnKJ3rwjHKRjHL/view?usp=sharing

![image](https://user-images.githubusercontent.com/70672706/99195075-8741c200-2751-11eb-8aca-fe370b7a72e6.png)