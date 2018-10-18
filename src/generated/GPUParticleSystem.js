import React from 'react'

class GPUParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { layerMask, onDisposeObservable, forceDepthWrite, activeParticleCount, useRampGradients } = props
    this.GPUParticleSystem = new GPUParticleSystem(layerMask, onDisposeObservable, forceDepthWrite, activeParticleCount, useRampGradients)
  }

  render () {
    return null
  }
}

export default GPUParticleSystem

