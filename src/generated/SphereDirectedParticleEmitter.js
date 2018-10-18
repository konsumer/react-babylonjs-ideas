import React from 'react'
import BABYLON from 'babylonjs'

class SphereDirectedParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2, radius, direction1, direction2 } = props
    this.SphereDirectedParticleEmitter = new BABYLON.SphereDirectedParticleEmitter(radius, direction1, direction2)
    this.SphereDirectedParticleEmitter.direction1 = direction1
    this.SphereDirectedParticleEmitter.direction2 = direction2
  }

  render () {
    return null
  }
}

export default SphereDirectedParticleEmitter

