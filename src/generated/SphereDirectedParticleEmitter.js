import React from 'react'

class SphereDirectedParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2 } = props
    this.SphereDirectedParticleEmitter = new SphereDirectedParticleEmitter(direction1, direction2)
  }

  render () {
    return null
  }
}

export default SphereDirectedParticleEmitter

