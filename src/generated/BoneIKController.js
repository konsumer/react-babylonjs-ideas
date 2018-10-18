import React from 'react'

class BoneIKController extends React.Component {
  constructor (props) {
    super(props)
    const { targetMesh, poleTargetMesh, poleTargetBone, targetPosition, poleTargetPosition, poleTargetLocalOffset, poleAngle, mesh, slerpAmount, maxAngle } = props
    this.BoneIKController = new BoneIKController(targetMesh, poleTargetMesh, poleTargetBone, targetPosition, poleTargetPosition, poleTargetLocalOffset, poleAngle, mesh, slerpAmount, maxAngle)
  }

  render () {
    return null
  }
}

export default BoneIKController

