import React from 'react'

class SphereParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, radiusRange, directionRandomizer } = props
    this.SphereParticleEmitter = new SphereParticleEmitter(radius, radiusRange, directionRandomizer)
  }

  render () {
    return null
  }
}

export default SphereParticleEmitter

