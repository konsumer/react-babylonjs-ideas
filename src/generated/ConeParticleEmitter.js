import React from 'react'
import BABYLON from 'babylonjs'

class ConeParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { directionRandomizer, radiusRange, heightRange, emitFromSpawnPointOnly, radius, angle, radius, angle, directionRandomizer } = props
    this.ConeParticleEmitter = new BABYLON.ConeParticleEmitter(radius, angle, directionRandomizer)
    this.ConeParticleEmitter.directionRandomizer = directionRandomizer
    this.ConeParticleEmitter.radiusRange = radiusRange
    this.ConeParticleEmitter.heightRange = heightRange
    this.ConeParticleEmitter.emitFromSpawnPointOnly = emitFromSpawnPointOnly
    this.ConeParticleEmitter.radius = radius
    this.ConeParticleEmitter.angle = angle
  }

  render () {
    return null
  }
}

export default ConeParticleEmitter

