import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RenderTargetTexture extends React.Component {
  constructor (props) {
    super(props)
    const { isCube, REFRESHRATE_RENDER_ONCE, REFRESHRATE_RENDER_ONEVERYFRAME, REFRESHRATE_RENDER_ONEVERYTWOFRAMES, renderListPredicate, renderList, renderParticles, renderSprites, coordinatesMode, activeCamera, customRenderFunction, useCameraPostProcesses, ignoreCameraViewport, onBeforeBindObservable, onAfterUnbindObservable, onAfterUnbind, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, onClearObservable, onClear, clearColor, renderTargetOptions, boundingBoxPosition, boundingBoxSize, depthStencilTexture, samples, refreshRate, canRescale, renderToTarget, name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format } = props
    this.RenderTargetTexture = new BABYLON.RenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti, format)
    this.RenderTargetTexture.isCube = isCube
    this.RenderTargetTexture.REFRESHRATE_RENDER_ONCE = REFRESHRATE_RENDER_ONCE
    this.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME = REFRESHRATE_RENDER_ONEVERYFRAME
    this.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = REFRESHRATE_RENDER_ONEVERYTWOFRAMES
    this.RenderTargetTexture.renderListPredicate = renderListPredicate
    this.RenderTargetTexture.renderList = renderList
    this.RenderTargetTexture.renderParticles = renderParticles
    this.RenderTargetTexture.renderSprites = renderSprites
    this.RenderTargetTexture.coordinatesMode = coordinatesMode
    this.RenderTargetTexture.activeCamera = activeCamera
    this.RenderTargetTexture.customRenderFunction = customRenderFunction
    this.RenderTargetTexture.useCameraPostProcesses = useCameraPostProcesses
    this.RenderTargetTexture.ignoreCameraViewport = ignoreCameraViewport
    this.RenderTargetTexture.onBeforeBindObservable = onBeforeBindObservable
    this.RenderTargetTexture.onAfterUnbindObservable = onAfterUnbindObservable
    this.RenderTargetTexture.onAfterUnbind = onAfterUnbind
    this.RenderTargetTexture.onBeforeRenderObservable = onBeforeRenderObservable
    this.RenderTargetTexture.onBeforeRender = onBeforeRender
    this.RenderTargetTexture.onAfterRenderObservable = onAfterRenderObservable
    this.RenderTargetTexture.onAfterRender = onAfterRender
    this.RenderTargetTexture.onClearObservable = onClearObservable
    this.RenderTargetTexture.onClear = onClear
    this.RenderTargetTexture.clearColor = clearColor
    this.RenderTargetTexture.renderTargetOptions = renderTargetOptions
    this.RenderTargetTexture.boundingBoxPosition = boundingBoxPosition
    this.RenderTargetTexture.boundingBoxSize = boundingBoxSize
    this.RenderTargetTexture.depthStencilTexture = depthStencilTexture
    this.RenderTargetTexture.samples = samples
    this.RenderTargetTexture.refreshRate = refreshRate
    this.RenderTargetTexture.canRescale = canRescale
    this.RenderTargetTexture.renderToTarget = renderToTarget
  }

  render () {
    return null
  }
}

export default withScene(RenderTargetTexture)

