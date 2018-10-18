import React from 'react'
import BABYLON from 'babylonjs'

class CylinderParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, height, radiusRange, directionRandomizer, radius, height, radiusRange, directionRandomizer } = props
    this.CylinderParticleEmitter = new BABYLON.CylinderParticleEmitter(radius, height, radiusRange, directionRandomizer)
    this.CylinderParticleEmitter.radius = radius
    this.CylinderParticleEmitter.height = height
    this.CylinderParticleEmitter.radiusRange = radiusRange
    this.CylinderParticleEmitter.directionRandomizer = directionRandomizer
  }

  render () {
    return null
  }
}

export default CylinderParticleEmitter

