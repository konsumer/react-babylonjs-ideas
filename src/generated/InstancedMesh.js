import React from 'react'

class InstancedMesh extends React.Component {
  constructor (props) {
    super(props)
    const { receiveShadows, material, visibility, skeleton, renderingGroupId, sourceMesh } = props
    this.InstancedMesh = new InstancedMesh(receiveShadows, material, visibility, skeleton, renderingGroupId, sourceMesh)
  }

  render () {
    return null
  }
}

export default InstancedMesh

