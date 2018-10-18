import React from 'react'
import BABYLON from 'babylonjs'

class DepthOfFieldMergePostProcessOptions extends React.Component {
  constructor (props) {
    super(props)
    const { originalFromInput, depthOfField, bloom } = props
    this.DepthOfFieldMergePostProcessOptions = new BABYLON.DepthOfFieldMergePostProcessOptions()
    this.DepthOfFieldMergePostProcessOptions.originalFromInput = originalFromInput
    this.DepthOfFieldMergePostProcessOptions.depthOfField = depthOfField
    this.DepthOfFieldMergePostProcessOptions.bloom = bloom
  }

  render () {
    return null
  }
}

export default DepthOfFieldMergePostProcessOptions

