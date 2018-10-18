import React from 'react'

class PickingInfo extends React.Component {
  constructor (props) {
    super(props)
    const { hit, distance, pickedPoint, pickedMesh, bu, bv, faceId, subMeshId, pickedSprite, originMesh, ray } = props
    this.PickingInfo = new PickingInfo(hit, distance, pickedPoint, pickedMesh, bu, bv, faceId, subMeshId, pickedSprite, originMesh, ray)
  }

  render () {
    return null
  }
}

export default PickingInfo

