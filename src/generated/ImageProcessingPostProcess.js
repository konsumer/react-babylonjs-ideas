import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class ImageProcessingPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { imageProcessingConfiguration, colorCurves, colorCurvesEnabled, colorGradingTexture, colorGradingEnabled, exposure, toneMappingEnabled, contrast, vignetteStretch, vignetteCentreX, vignetteCentreY, vignetteWeight, vignetteColor, vignetteCameraFov, vignetteBlendMode, vignetteEnabled, fromLinearSpace, name, options, camera, samplingMode, engine, reusable, textureType, imageProcessingConfiguration } = props
    this.ImageProcessingPostProcess = new BABYLON.ImageProcessingPostProcess(name, options, camera, samplingMode, engine, reusable, textureType, imageProcessingConfiguration)
    this.ImageProcessingPostProcess.imageProcessingConfiguration = imageProcessingConfiguration
    this.ImageProcessingPostProcess.colorCurves = colorCurves
    this.ImageProcessingPostProcess.colorCurvesEnabled = colorCurvesEnabled
    this.ImageProcessingPostProcess.colorGradingTexture = colorGradingTexture
    this.ImageProcessingPostProcess.colorGradingEnabled = colorGradingEnabled
    this.ImageProcessingPostProcess.exposure = exposure
    this.ImageProcessingPostProcess.toneMappingEnabled = toneMappingEnabled
    this.ImageProcessingPostProcess.contrast = contrast
    this.ImageProcessingPostProcess.vignetteStretch = vignetteStretch
    this.ImageProcessingPostProcess.vignetteCentreX = vignetteCentreX
    this.ImageProcessingPostProcess.vignetteCentreY = vignetteCentreY
    this.ImageProcessingPostProcess.vignetteWeight = vignetteWeight
    this.ImageProcessingPostProcess.vignetteColor = vignetteColor
    this.ImageProcessingPostProcess.vignetteCameraFov = vignetteCameraFov
    this.ImageProcessingPostProcess.vignetteBlendMode = vignetteBlendMode
    this.ImageProcessingPostProcess.vignetteEnabled = vignetteEnabled
    this.ImageProcessingPostProcess.fromLinearSpace = fromLinearSpace
  }

  render () {
    return null
  }
}

export default withEngine(ImageProcessingPostProcess)

