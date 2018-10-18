import React from 'react'

class NullEngineOptions extends React.Component {
  constructor (props) {
    super(props)
    const { renderWidth, renderHeight, textureSize, deterministicLockstep, lockstepMaxSteps } = props
    this.NullEngineOptions = new NullEngineOptions(renderWidth, renderHeight, textureSize, deterministicLockstep, lockstepMaxSteps)
  }

  render () {
    return null
  }
}

export default NullEngineOptions

