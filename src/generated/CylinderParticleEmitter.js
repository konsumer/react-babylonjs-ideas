import React from 'react'

class CylinderParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { radius, height, radiusRange, directionRandomizer } = props
    this.CylinderParticleEmitter = new CylinderParticleEmitter(radius, height, radiusRange, directionRandomizer)
  }

  render () {
    return null
  }
}

export default CylinderParticleEmitter

