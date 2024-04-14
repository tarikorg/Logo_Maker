//3 classes that return svg values for the html file
// circle triangle square


class Shapes {

  // take the shape user choses
  constructor(text, textColor, shapeColor) {
   
    this.text = text
    this.textColor = textColor
    this.shapeColor = shapeColor

  }




  //if condition to chose right shape on user input
  createSVG() {
 
    return ''
  }
  
}


class Circle extends Shapes{
  constructor(text , textColor, shapeColor , radius=80){
    super(text, textColor, shapeColor)
    this.radius = radius
  }

  createSVG(){
    const width = 300
    const height = 200

    return `
    <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${width / 2}" cy="${height / 2}" r="${this.radius}" fill="${this.shapeColor}" />
      <text x="${width / 2}" y="${height / 2 + 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
  `
  }
}

class Triangle extends Shapes{
  constructor(text, textColor, shapeColor){
    super(text, textColor, shapeColor)
  }

  createSVG(){
    const width = 300
    const height = 200

    return `
    <svg version="1.1" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${width / 2},0 0,${height} ${width},${height}" fill="${this.shapeColor}" />
      <text x="${width / 2}" y="${height / 2 + 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
  `

  }
}


class Square extends Shapes{
  constructor(text, textColor, shapeColor, side=300){
    super(text, textColor, shapeColor)
    this.side = side
  }
    
  createSVG(){
    return `
    <svg version="1.1" width="${this.side}" height="${this.side}" xmlns="http://www.w3.org/2000/svg">
      <rect x="75" y="30" width="${this.side/2}" height="${this.side/2}" fill="${this.shapeColor}" />
      <text x="${this.side / 2}" y="${this.side / 2 - 25}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
  `
  }
  
}





module.exports = {Circle, Square, Triangle}

