import React from 'react'

class ColorGradingTexture extends React.Component {
  constructor (props) {
    super(props)
    const { url, load3dlTexture, loadTexture } = props
    this.ColorGradingTexture = new ColorGradingTexture(url, load3dlTexture, loadTexture)
  }

  render () {
    return null
  }
}

export default ColorGradingTexture

