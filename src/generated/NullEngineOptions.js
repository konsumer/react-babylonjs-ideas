import React from 'react'
import BABYLON from 'babylonjs'

class NullEngineOptions extends React.Component {
  constructor (props) {
    super(props)
    const { renderWidth, renderHeight, textureSize, deterministicLockstep, lockstepMaxSteps } = props
    this.NullEngineOptions = new BABYLON.NullEngineOptions()
    this.NullEngineOptions.renderWidth = renderWidth
    this.NullEngineOptions.renderHeight = renderHeight
    this.NullEngineOptions.textureSize = textureSize
    this.NullEngineOptions.deterministicLockstep = deterministicLockstep
    this.NullEngineOptions.lockstepMaxSteps = lockstepMaxSteps
  }

  render () {
    return null
  }
}

export default NullEngineOptions

