import React from 'react'

class IntersectionInfo extends React.Component {
  constructor (props) {
    super(props)
    const { bu, bv, distance, faceId, subMeshId } = props
    this.IntersectionInfo = new IntersectionInfo(bu, bv, distance, faceId, subMeshId)
  }

  render () {
    return null
  }
}

export default IntersectionInfo

