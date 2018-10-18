import React from 'react'

class ColorGradient extends React.Component {
  constructor (props) {
    super(props)
    const { gradient, color1, color2 } = props
    this.ColorGradient = new ColorGradient(gradient, color1, color2)
  }

  render () {
    return null
  }
}

export default ColorGradient

