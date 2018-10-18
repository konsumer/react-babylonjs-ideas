import React from 'react'
import BABYLON from 'babylonjs'

class SphereParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, radiusRange, directionRandomizer, radius, radiusRange, directionRandomizer } = props
    this.SphereParticleEmitter = new BABYLON.SphereParticleEmitter(radius, radiusRange, directionRandomizer)
    this.SphereParticleEmitter.radius = radius
    this.SphereParticleEmitter.radiusRange = radiusRange
    this.SphereParticleEmitter.directionRandomizer = directionRandomizer
  }

  render () {
    return null
  }
}

export default SphereParticleEmitter

