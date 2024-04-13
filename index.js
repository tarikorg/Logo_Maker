const fs = require('fs')
const inquirer = require('inquirer')
const Shape = require('./lib/shapes')


inquirer.prompt(
[
{
    type: 'list',
    name: 'shape',
    message: 'Select shape',
    choices: ['circle', 'square','triangle']
},
{
    type: 'input',
    name: 'text',
    message: 'Enter text (up to 3 characters):',
    // max 3 char
    validate: function (value){
        if (value.length > 3){
            return 'Please enter up to 3 characters'
        }
        return true;
    }
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):'
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal number):'
}


]
).then((userInput)=>{
    const makeShape = new Shape(
        userInput.shape,
        userInput.text,
        userInput.textColor,
    )
})