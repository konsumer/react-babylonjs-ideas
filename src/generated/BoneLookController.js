import React from 'react'
import BABYLON from 'babylonjs'

class BoneLookController extends React.Component {
  constructor (props) {
    super(props)
    const { target, mesh, bone, upAxis, upAxisSpace, adjustYaw, adjustPitch, adjustRoll, slerpAmount, minYaw, maxYaw, minPitch, maxPitch, mesh, bone, target, options } = props
    this.BoneLookController = new BABYLON.BoneLookController(mesh, bone, target, options)
    this.BoneLookController.target = target
    this.BoneLookController.mesh = mesh
    this.BoneLookController.bone = bone
    this.BoneLookController.upAxis = upAxis
    this.BoneLookController.upAxisSpace = upAxisSpace
    this.BoneLookController.adjustYaw = adjustYaw
    this.BoneLookController.adjustPitch = adjustPitch
    this.BoneLookController.adjustRoll = adjustRoll
    this.BoneLookController.slerpAmount = slerpAmount
    this.BoneLookController.minYaw = minYaw
    this.BoneLookController.maxYaw = maxYaw
    this.BoneLookController.minPitch = minPitch
    this.BoneLookController.maxPitch = maxPitch
  }

  render () {
    return null
  }
}

export default BoneLookController

