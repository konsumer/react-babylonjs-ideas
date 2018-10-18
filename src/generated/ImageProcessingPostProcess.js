import React from 'react'

class ImageProcessingPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { imageProcessingConfiguration, colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, exposure, toneMappingEnabled, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, fromLinearSpace } = props
    this.ImageProcessingPostProcess = new ImageProcessingPostProcess(imageProcessingConfiguration, colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, exposure, toneMappingEnabled, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, fromLinearSpace)
  }

  render () {
    return null
  }
}

export default ImageProcessingPostProcess

