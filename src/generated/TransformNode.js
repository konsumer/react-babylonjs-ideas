import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class TransformNode extends React.Component {
  constructor (props) {
    super(props)
    const { BILLBOARDMODE_NONE, BILLBOARDMODE_X, BILLBOARDMODE_Y, BILLBOARDMODE_Z, BILLBOARDMODE_ALL, billboardMode, scalingDeterminant, infiniteDistance, ignoreNonUniformScaling, onAfterWorldMatrixUpdateObservable, position, rotation, scaling, rotationQuaternion, forward, up, right, absolutePosition, isWorldMatrixFrozen, nonUniformScaling, name, scene, isPure } = props
    this.TransformNode = new BABYLON.TransformNode(name, scene, isPure)
    this.TransformNode.BILLBOARDMODE_NONE = BILLBOARDMODE_NONE
    this.TransformNode.BILLBOARDMODE_X = BILLBOARDMODE_X
    this.TransformNode.BILLBOARDMODE_Y = BILLBOARDMODE_Y
    this.TransformNode.BILLBOARDMODE_Z = BILLBOARDMODE_Z
    this.TransformNode.BILLBOARDMODE_ALL = BILLBOARDMODE_ALL
    this.TransformNode.billboardMode = billboardMode
    this.TransformNode.scalingDeterminant = scalingDeterminant
    this.TransformNode.infiniteDistance = infiniteDistance
    this.TransformNode.ignoreNonUniformScaling = ignoreNonUniformScaling
    this.TransformNode.onAfterWorldMatrixUpdateObservable = onAfterWorldMatrixUpdateObservable
    this.TransformNode.position = position
    this.TransformNode.rotation = rotation
    this.TransformNode.scaling = scaling
    this.TransformNode.rotationQuaternion = rotationQuaternion
    this.TransformNode.forward = forward
    this.TransformNode.up = up
    this.TransformNode.right = right
    this.TransformNode.absolutePosition = absolutePosition
    this.TransformNode.isWorldMatrixFrozen = isWorldMatrixFrozen
    this.TransformNode.nonUniformScaling = nonUniformScaling
  }

  render () {
    return null
  }
}

export default withScene(TransformNode)

