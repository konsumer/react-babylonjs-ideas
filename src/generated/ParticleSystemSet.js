import React from 'react'

class ParticleSystemSet extends React.Component {
  constructor (props) {
    super(props)
    const { systems, emitterNode } = props
    this.ParticleSystemSet = new ParticleSystemSet(systems, emitterNode)
  }

  render () {
    return null
  }
}

export default ParticleSystemSet

