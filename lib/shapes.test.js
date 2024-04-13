// require shapes
// test each shapes
// for each shape create new instance with SET values, and toContain('svg')

const Shape = require('./shapes.js')

describe('Testing SVG_Shapes', ()=>{
    // CIRCLE 
    test('Testing circle', ()=>{
        const shape = new Shape('circle', 'SVG', 'white', 'green')
        // shape circle, text SVG , textcolor:white, bg: green
        const svgRendered = shape.createSVG()
        // const svgRendered =  obj.render() in acceptance criteria basically
        expect(svgRendered).toContain('<circle cx="150" cy="100" r="80" fill="green" />')
    })


   // SQUARE
    test('Testing square', ()=>{
        const shape = new Shape('square','SVG','white','red')
        const svgRendered = shape.createSVG()
        expect(svgRendered).toContain('<rect x="0" y="0" width="300" height="300" fill="red" />')
    })

    // TRIANGLE
    test('Testing triangle', ()=>{
        const shape = new Shape('triangle', 'SVG', 'black', 'yellow')
        const svgRendered = shape.createSVG()
        expect(svgRendered).toContain('<polygon points="150,0 0,200 300,200" fill="yellow" />')
    })
})