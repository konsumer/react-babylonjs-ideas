import React from 'react'

class PointParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2 } = props
    this.PointParticleEmitter = new PointParticleEmitter(direction1, direction2)
  }

  render () {
    return null
  }
}

export default PointParticleEmitter

