import React from 'react'
import BABYLON from 'babylonjs'

class BoxParticleEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { direction1, direction2, minEmitBox, maxEmitBox } = props
    this.BoxParticleEmitter = new BABYLON.BoxParticleEmitter()
    this.BoxParticleEmitter.direction1 = direction1
    this.BoxParticleEmitter.direction2 = direction2
    this.BoxParticleEmitter.minEmitBox = minEmitBox
    this.BoxParticleEmitter.maxEmitBox = maxEmitBox
  }

  render () {
    return null
  }
}

export default BoxParticleEmitter

