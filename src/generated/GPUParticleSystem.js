import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GPUParticleSystem extends React.Component {
  constructor (props) {
    super(props)
    const { layerMask, IsSupported, onDisposeObservable, forceDepthWrite, activeParticleCount, useRampGradients, name, options, scene, isAnimationSheetEnabled } = props
    this.GPUParticleSystem = new BABYLON.GPUParticleSystem(name, options, scene, isAnimationSheetEnabled)
    this.GPUParticleSystem.layerMask = layerMask
    this.GPUParticleSystem.IsSupported = IsSupported
    this.GPUParticleSystem.onDisposeObservable = onDisposeObservable
    this.GPUParticleSystem.forceDepthWrite = forceDepthWrite
    this.GPUParticleSystem.activeParticleCount = activeParticleCount
    this.GPUParticleSystem.useRampGradients = useRampGradients
  }

  render () {
    return null
  }
}

export default withScene(GPUParticleSystem)

