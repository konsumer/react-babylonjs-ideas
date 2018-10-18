import React from 'react'
import BABYLON from 'babylonjs'

class IntersectionInfo extends React.Component {
  constructor (props) {
    super(props)
    const { bu, bv, distance, faceId, subMeshId, bu, bv, distance } = props
    this.IntersectionInfo = new BABYLON.IntersectionInfo(bu, bv, distance)
    this.IntersectionInfo.bu = bu
    this.IntersectionInfo.bv = bv
    this.IntersectionInfo.distance = distance
    this.IntersectionInfo.faceId = faceId
    this.IntersectionInfo.subMeshId = subMeshId
  }

  render () {
    return null
  }
}

export default IntersectionInfo

