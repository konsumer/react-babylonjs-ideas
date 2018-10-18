import React from 'react'

class Light extends React.Component {
  constructor (props) {
    super(props)
    const { diffuse, specular, falloffType, intensity, range, intensityMode, radius, renderPriority, shadowEnabled, includedOnlyMeshes, excludedMeshes, excludeWithLayerMask, includeOnlyWithLayerMask, lightmapMode } = props
    this.Light = new Light(diffuse, specular, falloffType, intensity, range, intensityMode, radius, renderPriority, shadowEnabled, includedOnlyMeshes, excludedMeshes, excludeWithLayerMask, includeOnlyWithLayerMask, lightmapMode)
  }

  render () {
    return null
  }
}

export default Light

