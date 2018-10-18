import React from 'react'

class PostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, width, height, renderTargetSamplingMode, clearColor, autoClear, alphaMode, alphaConstants, animations, enablePixelPerfectMode, forceFullscreenViewport, scaleMode, alwaysForcePOT, samples, adaptScaleToCurrentViewport, onActivateObservable, onActivate, onSizeChangedObservable, onSizeChanged, onApplyObservable, onApply, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, inputTexture, texelSize, isSupported, aspectRatio } = props
    this.PostProcess = new PostProcess(name, width, height, renderTargetSamplingMode, clearColor, autoClear, alphaMode, alphaConstants, animations, enablePixelPerfectMode, forceFullscreenViewport, scaleMode, alwaysForcePOT, samples, adaptScaleToCurrentViewport, onActivateObservable, onActivate, onSizeChangedObservable, onSizeChanged, onApplyObservable, onApply, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender, inputTexture, texelSize, isSupported, aspectRatio)
  }

  render () {
    return null
  }
}

export default PostProcess

