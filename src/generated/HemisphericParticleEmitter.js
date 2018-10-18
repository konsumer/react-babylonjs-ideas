import React from 'react'
import BABYLON from 'babylonjs'

class HemisphericParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, radiusRange, directionRandomizer, radius, radiusRange, directionRandomizer } = props
    this.HemisphericParticleEmitter = new BABYLON.HemisphericParticleEmitter(radius, radiusRange, directionRandomizer)
    this.HemisphericParticleEmitter.radius = radius
    this.HemisphericParticleEmitter.radiusRange = radiusRange
    this.HemisphericParticleEmitter.directionRandomizer = directionRandomizer
  }

  render () {
    return null
  }
}

export default HemisphericParticleEmitter

