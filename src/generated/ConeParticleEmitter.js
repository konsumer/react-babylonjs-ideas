import React from 'react'

class ConeParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { directionRandomizer, radiusRange, heightRange, emitFromSpawnPointOnly, radius, angle } = props
    this.ConeParticleEmitter = new ConeParticleEmitter(directionRandomizer, radiusRange, heightRange, emitFromSpawnPointOnly, radius, angle)
  }

  render () {
    return null
  }
}

export default ConeParticleEmitter

