import React from 'react'

class TransformNode extends React.Component {
  constructor (props) {
    super(props)
    const { billboardMode, scalingDeterminant, infiniteDistance, ignoreNonUniformScaling, onAfterWorldMatrixUpdateObservable, position, rotation, scaling, rotationQuaternion, forward, up, right, absolutePosition, isWorldMatrixFrozen, nonUniformScaling } = props
    this.TransformNode = new TransformNode(billboardMode, scalingDeterminant, infiniteDistance, ignoreNonUniformScaling, onAfterWorldMatrixUpdateObservable, position, rotation, scaling, rotationQuaternion, forward, up, right, absolutePosition, isWorldMatrixFrozen, nonUniformScaling)
  }

  render () {
    return null
  }
}

export default TransformNode

