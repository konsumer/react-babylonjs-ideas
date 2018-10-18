import React from 'react'
import BABYLON from 'babylonjs'

class CylinderDirectedParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2, radius, height, radiusRange, direction1, direction2 } = props
    this.CylinderDirectedParticleEmitter = new BABYLON.CylinderDirectedParticleEmitter(radius, height, radiusRange, direction1, direction2)
    this.CylinderDirectedParticleEmitter.direction1 = direction1
    this.CylinderDirectedParticleEmitter.direction2 = direction2
  }

  render () {
    return null
  }
}

export default CylinderDirectedParticleEmitter

