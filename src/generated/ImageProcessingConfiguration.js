import React from 'react'
import BABYLON from 'babylonjs'

class ImageProcessingConfiguration extends React.Component {
  constructor (props) {
    super(props)
    const { TONEMAPPING_STANDARD, TONEMAPPING_ACES, colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, colorGradingWithGreenDepth, colorGradingBGR, exposure, toneMappingEnabled, toneMappingType, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, applyByPostProcess, isEnabled, onUpdateParameters, VIGNETTEMODE_MULTIPLY, VIGNETTEMODE_OPAQUE } = props
    this.ImageProcessingConfiguration = new BABYLON.ImageProcessingConfiguration()
    this.ImageProcessingConfiguration.TONEMAPPING_STANDARD = TONEMAPPING_STANDARD
    this.ImageProcessingConfiguration.TONEMAPPING_ACES = TONEMAPPING_ACES
    this.ImageProcessingConfiguration.colorCurves = colorCurves
    this.ImageProcessingConfiguration.colorCurvesEnabled = colorCurvesEnabled
    this.ImageProcessingConfiguration.colorGradingTexture = colorGradingTexture
    this.ImageProcessingConfiguration.colorGradingEnabled = colorGradingEnabled
    this.ImageProcessingConfiguration.colorGradingWithGreenDepth = colorGradingWithGreenDepth
    this.ImageProcessingConfiguration.colorGradingBGR = colorGradingBGR
    this.ImageProcessingConfiguration.exposure = exposure
    this.ImageProcessingConfiguration.toneMappingEnabled = toneMappingEnabled
    this.ImageProcessingConfiguration.toneMappingType = toneMappingType
    this.ImageProcessingConfiguration.contrast = contrast
    this.ImageProcessingConfiguration.vignetteStretch = vignetteStretch
    this.ImageProcessingConfiguration.vignetteCentreX = vignetteCentreX
    this.ImageProcessingConfiguration.vignetteCentreY = vignetteCentreY
    this.ImageProcessingConfiguration.vignetteWeight = vignetteWeight
    this.ImageProcessingConfiguration.vignetteColor = vignetteColor
    this.ImageProcessingConfiguration.vignetteCameraFov = vignetteCameraFov
    this.ImageProcessingConfiguration.vignetteBlendMode = vignetteBlendMode
    this.ImageProcessingConfiguration.vignetteEnabled = vignetteEnabled
    this.ImageProcessingConfiguration.applyByPostProcess = applyByPostProcess
    this.ImageProcessingConfiguration.isEnabled = isEnabled
    this.ImageProcessingConfiguration.onUpdateParameters = onUpdateParameters
    this.ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY = VIGNETTEMODE_MULTIPLY
    this.ImageProcessingConfiguration.VIGNETTEMODE_OPAQUE = VIGNETTEMODE_OPAQUE
  }

  render () {
    return null
  }
}

export default ImageProcessingConfiguration

