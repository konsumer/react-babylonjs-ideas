import React from 'react'

class Material extends React.Component {
  constructor (props) {
    super(props)
    const { id, uniqueId, name, checkReadyOnEveryCall, checkReadyOnlyOnce, state, alpha, backFaceCulling, sideOrientation, onCompiled, onError, getRenderTargetTextures, hasRenderTargetTextures, doNotSerialize, storeEffectOnSubMeshes, animations, onDisposeObservable, onDispose, onBindObservable, onBind, onUnBindObservable, alphaMode, needDepthPrePass, disableDepthWrite, forceDepthWrite, separateCullingPass, fogEnabled, pointSize, zOffset, wireframe, pointsCloud, fillMode, isFrozen } = props
    this.Material = new Material(id, uniqueId, name, checkReadyOnEveryCall, checkReadyOnlyOnce, state, alpha, backFaceCulling, sideOrientation, onCompiled, onError, getRenderTargetTextures, hasRenderTargetTextures, doNotSerialize, storeEffectOnSubMeshes, animations, onDisposeObservable, onDispose, onBindObservable, onBind, onUnBindObservable, alphaMode, needDepthPrePass, disableDepthWrite, forceDepthWrite, separateCullingPass, fogEnabled, pointSize, zOffset, wireframe, pointsCloud, fillMode, isFrozen)
  }

  render () {
    return null
  }
}

export default Material

