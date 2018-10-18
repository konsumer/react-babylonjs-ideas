import React from 'react'

class NoiseProceduralTexture extends React.Component {
  constructor (props) {
    super(props)
    const { brightness, octaves, persistence, animationSpeedFactor } = props
    this.NoiseProceduralTexture = new NoiseProceduralTexture(brightness, octaves, persistence, animationSpeedFactor)
  }

  render () {
    return null
  }
}

export default NoiseProceduralTexture

