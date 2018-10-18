import React from 'react'
import BABYLON from 'babylonjs'

class PickingInfo extends React.Component {
  constructor (props) {
    super(props)
    const { hit, distance, pickedPoint, pickedMesh, bu, bv, faceId, subMeshId, pickedSprite, originMesh, ray } = props
    this.PickingInfo = new BABYLON.PickingInfo()
    this.PickingInfo.hit = hit
    this.PickingInfo.distance = distance
    this.PickingInfo.pickedPoint = pickedPoint
    this.PickingInfo.pickedMesh = pickedMesh
    this.PickingInfo.bu = bu
    this.PickingInfo.bv = bv
    this.PickingInfo.faceId = faceId
    this.PickingInfo.subMeshId = subMeshId
    this.PickingInfo.pickedSprite = pickedSprite
    this.PickingInfo.originMesh = originMesh
    this.PickingInfo.ray = ray
  }

  render () {
    return null
  }
}

export default PickingInfo

