//3 classes that return svg values for the html file
// circle triangle square


class Shapes {

  // take the shape user choses
  constructor(shape, text, textColor, shapeColor) {
    this.shape = shape
    this.text = text
    this.textColor = textColor
    this.shapeColor = shapeColor
       //default width/height value
       this.width = 300
       this.height = 200
       //radius for circle ()
       this.radius = 80
  }




  //if condition to chose right shape on user input
  createSVG() {
    if (this.shape === "circle") {
      return this.createCircle(this.width, this.height, this.radius, this.text, this.textColor, this.shapeColor)
    } else if (this.shape === "square") {
      return this.createSquare(this.width, this.text, this.textColor, this.shapeColor)
    } else if (this.shape === "triangle") {
      return this.createTriangle(this.width, this.height, this.text, this.textColor, this.shapeColor)
    } else {
      return "Invalid shape" // i dont think this will happen because i give user List prompt 
    }
  }



  // circle with required values for its size and the text user wants
  createCircle(width, height, radius, text, textColor, shapeColor) {
    return `
          <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${width / 2}" cy="${height / 2}" r="${radius}" fill="${shapeColor}" />
            <text x="${width / 2}" y="${height / 2 + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `
  }





  createTriangle(width, height, text, textColor, shapeColor) {
    return `
          <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${width / 2},0 0,${height} ${width},${height}" fill="${shapeColor}" />
            <text x="${width / 2}" y="${height / 2 + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
          </svg>
        `
  }




  createSquare(width, text, textColor, shapeColor) {
    return `
        <svg version="1.1" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="${width}" height="${width}" fill="${shapeColor}" />
          <text x="${width / 2}" y="${width / 2 + 25}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `
  }

  
}
module.exports = Shapes

