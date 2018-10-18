import React from 'react'
import BABYLON from 'babylonjs'

class WeightedSound extends React.Component {
  constructor (props) {
    super(props)
    const { loop, isPlaying, isPaused, directionalConeInnerAngle, directionalConeOuterAngle, volume, loop, sounds, weights } = props
    this.WeightedSound = new BABYLON.WeightedSound(loop, sounds, weights)
    this.WeightedSound.loop = loop
    this.WeightedSound.isPlaying = isPlaying
    this.WeightedSound.isPaused = isPaused
    this.WeightedSound.directionalConeInnerAngle = directionalConeInnerAngle
    this.WeightedSound.directionalConeOuterAngle = directionalConeOuterAngle
    this.WeightedSound.volume = volume
  }

  render () {
    return null
  }
}

export default WeightedSound

