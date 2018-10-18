import React from 'react'
import BABYLON from 'babylonjs'

class SubEmitter extends React.Component {
  constructor (props) {
    super(props)
    const { particleSystem, type, inheritDirection, inheritedVelocityAmount, particleSystem } = props
    this.SubEmitter = new BABYLON.SubEmitter(particleSystem)
    this.SubEmitter.particleSystem = particleSystem
    this.SubEmitter.type = type
    this.SubEmitter.inheritDirection = inheritDirection
    this.SubEmitter.inheritedVelocityAmount = inheritedVelocityAmount
  }

  render () {
    return null
  }
}

export default SubEmitter

