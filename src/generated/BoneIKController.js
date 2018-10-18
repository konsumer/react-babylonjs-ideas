import React from 'react'
import BABYLON from 'babylonjs'

class BoneIKController extends React.Component {
  constructor (props) {
    super(props)
    const { targetMesh, poleTargetMesh, poleTargetBone, targetPosition, poleTargetPosition, poleTargetLocalOffset, poleAngle, mesh, slerpAmount, maxAngle, mesh, bone, options } = props
    this.BoneIKController = new BABYLON.BoneIKController(mesh, bone, options)
    this.BoneIKController.targetMesh = targetMesh
    this.BoneIKController.poleTargetMesh = poleTargetMesh
    this.BoneIKController.poleTargetBone = poleTargetBone
    this.BoneIKController.targetPosition = targetPosition
    this.BoneIKController.poleTargetPosition = poleTargetPosition
    this.BoneIKController.poleTargetLocalOffset = poleTargetLocalOffset
    this.BoneIKController.poleAngle = poleAngle
    this.BoneIKController.mesh = mesh
    this.BoneIKController.slerpAmount = slerpAmount
    this.BoneIKController.maxAngle = maxAngle
  }

  render () {
    return null
  }
}

export default BoneIKController

