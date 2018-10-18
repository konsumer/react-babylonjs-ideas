import React from 'react'

class WeightedSound extends React.Component {
  constructor (props) {
    super(props)
    const { loop, isPlaying, isPaused, directionalConeInnerAngle, directionalConeOuterAngle, volume } = props
    this.WeightedSound = new WeightedSound(loop, isPlaying, isPaused, directionalConeInnerAngle, directionalConeOuterAngle, volume)
  }

  render () {
    return null
  }
}

export default WeightedSound

