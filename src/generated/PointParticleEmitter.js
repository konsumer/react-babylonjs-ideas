import React from 'react'
import BABYLON from 'babylonjs'

class PointParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2 } = props
    this.PointParticleEmitter = new BABYLON.PointParticleEmitter()
    this.PointParticleEmitter.direction1 = direction1
    this.PointParticleEmitter.direction2 = direction2
  }

  render () {
    return null
  }
}

export default PointParticleEmitter

