import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class PostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, width, height, renderTargetSamplingMode, clearColor, autoClear, alphaMode, alphaConstants, animations, enablePixelPerfectMode, forceFullscreenViewport, scaleMode, alwaysForcePOT, samples, adaptScaleToCurrentViewport, onActivateObservable, onActivate, onSizeChangedObservable, onSizeChanged, onApplyObservable, onApply, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, inputTexture, texelSize, isSupported, aspectRatio, name, fragmentUrl, parameters, samplers, options, camera, samplingMode, engine, reusable, defines, textureType, vertexUrl, indexParameters, blockCompilation } = props
    this.PostProcess = new BABYLON.PostProcess(name, fragmentUrl, parameters, samplers, options, camera, samplingMode, engine, reusable, defines, textureType, vertexUrl, indexParameters, blockCompilation)
    this.PostProcess.name = name
    this.PostProcess.width = width
    this.PostProcess.height = height
    this.PostProcess.renderTargetSamplingMode = renderTargetSamplingMode
    this.PostProcess.clearColor = clearColor
    this.PostProcess.autoClear = autoClear
    this.PostProcess.alphaMode = alphaMode
    this.PostProcess.alphaConstants = alphaConstants
    this.PostProcess.animations = animations
    this.PostProcess.enablePixelPerfectMode = enablePixelPerfectMode
    this.PostProcess.forceFullscreenViewport = forceFullscreenViewport
    this.PostProcess.scaleMode = scaleMode
    this.PostProcess.alwaysForcePOT = alwaysForcePOT
    this.PostProcess.samples = samples
    this.PostProcess.adaptScaleToCurrentViewport = adaptScaleToCurrentViewport
    this.PostProcess.onActivateObservable = onActivateObservable
    this.PostProcess.onActivate = onActivate
    this.PostProcess.onSizeChangedObservable = onSizeChangedObservable
    this.PostProcess.onSizeChanged = onSizeChanged
    this.PostProcess.onApplyObservable = onApplyObservable
    this.PostProcess.onApply = onApply
    this.PostProcess.onBeforeRenderObservable = onBeforeRenderObservable
    this.PostProcess.onBeforeRender = onBeforeRender
    this.PostProcess.onAfterRenderObservable = onAfterRenderObservable
    this.PostProcess.onAfterRender = onAfterRender
    this.PostProcess.inputTexture = inputTexture
    this.PostProcess.texelSize = texelSize
    this.PostProcess.isSupported = isSupported
    this.PostProcess.aspectRatio = aspectRatio
  }

  render () {
    return null
  }
}

export default withEngine(PostProcess)

