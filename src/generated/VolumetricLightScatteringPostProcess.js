import React from 'react'

class VolumetricLightScatteringPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { attachedNode, customMeshPosition, useCustomMeshPosition, invert, mesh, useDiffuseColor, excludedMeshes, exposure, decay, weight, density } = props
    this.VolumetricLightScatteringPostProcess = new VolumetricLightScatteringPostProcess(attachedNode, customMeshPosition, useCustomMeshPosition, invert, mesh, useDiffuseColor, excludedMeshes, exposure, decay, weight, density)
  }

  render () {
    return null
  }
}

export default VolumetricLightScatteringPostProcess

