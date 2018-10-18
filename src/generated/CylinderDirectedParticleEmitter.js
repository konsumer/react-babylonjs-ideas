import React from 'react'

class CylinderDirectedParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2 } = props
    this.CylinderDirectedParticleEmitter = new CylinderDirectedParticleEmitter(direction1, direction2)
  }

  render () {
    return null
  }
}

export default CylinderDirectedParticleEmitter

