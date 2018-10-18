import React from 'react'
import BABYLON from 'babylonjs'

class Animation extends React.Component {
  constructor (props) {
    super(props)
    const { name, targetProperty, framePerSecond, dataType, loopMode, enableBlending, AllowMatricesInterpolation, AllowMatrixDecomposeForInterpolation, targetPropertyPath, blendingSpeed, runtimeAnimations, hasRunningRuntimeAnimations, ANIMATIONTYPE_FLOAT, ANIMATIONTYPE_VECTOR3, ANIMATIONTYPE_VECTOR2, ANIMATIONTYPE_SIZE, ANIMATIONTYPE_QUATERNION, ANIMATIONTYPE_MATRIX, ANIMATIONTYPE_COLOR3, ANIMATIONLOOPMODE_RELATIVE, ANIMATIONLOOPMODE_CYCLE, ANIMATIONLOOPMODE_CONSTANT, name, targetProperty, framePerSecond, dataType, loopMode, enableBlending } = props
    this.Animation = new BABYLON.Animation(name, targetProperty, framePerSecond, dataType, loopMode, enableBlending)
    this.Animation.name = name
    this.Animation.targetProperty = targetProperty
    this.Animation.framePerSecond = framePerSecond
    this.Animation.dataType = dataType
    this.Animation.loopMode = loopMode
    this.Animation.enableBlending = enableBlending
    this.Animation.AllowMatricesInterpolation = AllowMatricesInterpolation
    this.Animation.AllowMatrixDecomposeForInterpolation = AllowMatrixDecomposeForInterpolation
    this.Animation.targetPropertyPath = targetPropertyPath
    this.Animation.blendingSpeed = blendingSpeed
    this.Animation.runtimeAnimations = runtimeAnimations
    this.Animation.hasRunningRuntimeAnimations = hasRunningRuntimeAnimations
    this.Animation.ANIMATIONTYPE_FLOAT = ANIMATIONTYPE_FLOAT
    this.Animation.ANIMATIONTYPE_VECTOR3 = ANIMATIONTYPE_VECTOR3
    this.Animation.ANIMATIONTYPE_VECTOR2 = ANIMATIONTYPE_VECTOR2
    this.Animation.ANIMATIONTYPE_SIZE = ANIMATIONTYPE_SIZE
    this.Animation.ANIMATIONTYPE_QUATERNION = ANIMATIONTYPE_QUATERNION
    this.Animation.ANIMATIONTYPE_MATRIX = ANIMATIONTYPE_MATRIX
    this.Animation.ANIMATIONTYPE_COLOR3 = ANIMATIONTYPE_COLOR3
    this.Animation.ANIMATIONLOOPMODE_RELATIVE = ANIMATIONLOOPMODE_RELATIVE
    this.Animation.ANIMATIONLOOPMODE_CYCLE = ANIMATIONLOOPMODE_CYCLE
    this.Animation.ANIMATIONLOOPMODE_CONSTANT = ANIMATIONLOOPMODE_CONSTANT
  }

  render () {
    return null
  }
}

export default Animation

