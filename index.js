const fs = require('fs')
const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require('./lib/shapes')


inquirer.prompt(
    [
        {
            type: 'list',
            name: 'shape',
            message: 'Select shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to 3 characters):',
            // max 3 char
            validate: function (value) {
                if (value.length > 3) {
                    return 'Please enter up to 3 characters'
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal number example: #1231231):'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal number example: #123123):'
        }


    ]
).then((userInput) => {
    let makeShape
    switch (userInput.shape) {
        case 'circle':
            makeShape = new Circle(userInput.text, userInput.textColor, userInput.shapeColor)
            break
        case 'square':
            makeShape = new Square(userInput.text, userInput.textColor, userInput.shapeColor)
            break
        case 'triangle':
            makeShape = new Triangle(userInput.text, userInput.textColor, userInput.shapeColor)
            break
    }

    const svg = makeShape.createSVG()

    fs.writeFile('./createdSvg/logo.svg', svg, function (err) {
        if (err) {
            console.log('error: ', err)
        } else {
            console.log('Generated logo.svg')
        }
    })
})