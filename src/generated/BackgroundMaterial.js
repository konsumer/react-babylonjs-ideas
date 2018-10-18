import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BackgroundMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { StandardReflectance0, StandardReflectance90, primaryColor, primaryColorShadowLevel, primaryColorHighlightLevel, reflectionTexture, reflectionBlur, diffuseTexture, shadowLights, shadowLevel, sceneCenter, opacityFresnel, reflectionFresnel, reflectionFalloffDistance, reflectionAmount, reflectionReflectance0, reflectionReflectance90, reflectionStandardFresnelWeight, useRGBColor, enableNoise, fovMultiplier, useEquirectangularFOV, maxSimultaneousLights, imageProcessingConfiguration, cameraColorCurvesEnabled, cameraColorGradingEnabled, cameraToneMappingEnabled, cameraExposure, cameraContrast, cameraColorGradingTexture, cameraColorCurves, switchToBGR, hasRenderTargetTextures, name, scene } = props
    this.BackgroundMaterial = new BABYLON.BackgroundMaterial(name, scene)
    this.BackgroundMaterial.StandardReflectance0 = StandardReflectance0
    this.BackgroundMaterial.StandardReflectance90 = StandardReflectance90
    this.BackgroundMaterial.primaryColor = primaryColor
    this.BackgroundMaterial.primaryColorShadowLevel = primaryColorShadowLevel
    this.BackgroundMaterial.primaryColorHighlightLevel = primaryColorHighlightLevel
    this.BackgroundMaterial.reflectionTexture = reflectionTexture
    this.BackgroundMaterial.reflectionBlur = reflectionBlur
    this.BackgroundMaterial.diffuseTexture = diffuseTexture
    this.BackgroundMaterial.shadowLights = shadowLights
    this.BackgroundMaterial.shadowLevel = shadowLevel
    this.BackgroundMaterial.sceneCenter = sceneCenter
    this.BackgroundMaterial.opacityFresnel = opacityFresnel
    this.BackgroundMaterial.reflectionFresnel = reflectionFresnel
    this.BackgroundMaterial.reflectionFalloffDistance = reflectionFalloffDistance
    this.BackgroundMaterial.reflectionAmount = reflectionAmount
    this.BackgroundMaterial.reflectionReflectance0 = reflectionReflectance0
    this.BackgroundMaterial.reflectionReflectance90 = reflectionReflectance90
    this.BackgroundMaterial.reflectionStandardFresnelWeight = reflectionStandardFresnelWeight
    this.BackgroundMaterial.useRGBColor = useRGBColor
    this.BackgroundMaterial.enableNoise = enableNoise
    this.BackgroundMaterial.fovMultiplier = fovMultiplier
    this.BackgroundMaterial.useEquirectangularFOV = useEquirectangularFOV
    this.BackgroundMaterial.maxSimultaneousLights = maxSimultaneousLights
    this.BackgroundMaterial.imageProcessingConfiguration = imageProcessingConfiguration
    this.BackgroundMaterial.cameraColorCurvesEnabled = cameraColorCurvesEnabled
    this.BackgroundMaterial.cameraColorGradingEnabled = cameraColorGradingEnabled
    this.BackgroundMaterial.cameraToneMappingEnabled = cameraToneMappingEnabled
    this.BackgroundMaterial.cameraExposure = cameraExposure
    this.BackgroundMaterial.cameraContrast = cameraContrast
    this.BackgroundMaterial.cameraColorGradingTexture = cameraColorGradingTexture
    this.BackgroundMaterial.cameraColorCurves = cameraColorCurves
    this.BackgroundMaterial.switchToBGR = switchToBGR
    this.BackgroundMaterial.hasRenderTargetTextures = hasRenderTargetTextures
  }

  render () {
    return null
  }
}

export default withScene(BackgroundMaterial)

