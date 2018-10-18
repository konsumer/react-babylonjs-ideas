import React from 'react'

class ImageProcessingConfiguration extends React.Component {
  constructor (props) {
    super(props)
    const { colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, colorGradingWithGreenDepth, colorGradingBGR, exposure, toneMappingEnabled, toneMappingType, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, applyByPostProcess, isEnabled, onUpdateParameters } = props
    this.ImageProcessingConfiguration = new ImageProcessingConfiguration(colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, colorGradingWithGreenDepth, colorGradingBGR, exposure, toneMappingEnabled, toneMappingType, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, applyByPostProcess, isEnabled, onUpdateParameters)
  }

  render () {
    return null
  }
}

export default ImageProcessingConfiguration

