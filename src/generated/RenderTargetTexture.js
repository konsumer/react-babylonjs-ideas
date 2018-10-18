import React from 'react'

class RenderTargetTexture extends React.Component {
  constructor (props) {
    super(props)
    const { isCube, renderListPredicate, renderList, renderParticles, renderSprites, coordinatesMode, activeCamera, customRenderFunction, useCameraPostProcesses, ignoreCameraViewport, onBeforeBindObservable, onAfterUnbindObservable, onAfterUnbind, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, onClearObservable, onClear, clearColor, renderTargetOptions, boundingBoxPosition, boundingBoxSize, depthStencilTexture, samples, refreshRate, canRescale, renderToTarget } = props
    this.RenderTargetTexture = new RenderTargetTexture(isCube, renderListPredicate, renderList, renderParticles, renderSprites, coordinatesMode, activeCamera, customRenderFunction, useCameraPostProcesses, ignoreCameraViewport, onBeforeBindObservable, onAfterUnbindObservable, onAfterUnbind, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, onClearObservable, onClear, clearColor, renderTargetOptions, boundingBoxPosition, boundingBoxSize, depthStencilTexture, samples, refreshRate, canRescale, renderToTarget)
  }

  render () {
    return null
  }
}

export default RenderTargetTexture

