// require shapes
// test each shapes
// for each shape create new instance with SET values, and toContain('svg')

const {Circle, Square , Triangle} = require('./shapes.js')

describe('Testing SVG_Shapes', ()=>{
    // CIRCLE 
    test('Testing circle', ()=>{
        const shape = new Circle( 'SVG', 'white', 'green')
        // shape circle, text SVG , textcolor:white, bg: green
        const svgRendered = shape.createSVG()
        // const svgRendered =  obj.render() in acceptance criteria basically
        expect(svgRendered).toContain('<circle cx="150" cy="100" r="80" fill="green" />')
    })


   // SQUARE
    test('Testing square', ()=>{
        const shape = new Square('SVG','white','red')
        const svgRendered = shape.createSVG()
        expect(svgRendered).toContain('<rect x="75" y="30" width="150" height="150" fill="red" />')
    })

    // TRIANGLE
    test('Testing triangle', ()=>{
        const shape = new Triangle('SVG', 'black', 'yellow')
        const svgRendered = shape.createSVG()
        expect(svgRendered).toContain('<polygon points="150,0 0,200 300,200" fill="yellow" />')
    })
})