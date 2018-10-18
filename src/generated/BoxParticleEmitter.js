import React from 'react'

class BoxParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2, minEmitBox, maxEmitBox } = props
    this.BoxParticleEmitter = new BoxParticleEmitter(direction1, direction2, minEmitBox, maxEmitBox)
  }

  render () {
    return null
  }
}

export default BoxParticleEmitter

