import React from 'react'
import BABYLON from 'babylonjs'

class ParticleSystemSet extends React.Component {
  constructor (props) {
    super(props)
    const { systems, emitterNode } = props
    this.ParticleSystemSet = new BABYLON.ParticleSystemSet()
    this.ParticleSystemSet.systems = systems
    this.ParticleSystemSet.emitterNode = emitterNode
  }

  render () {
    return null
  }
}

export default ParticleSystemSet

