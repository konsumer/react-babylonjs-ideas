import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StandardRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { originalPostProcess, downSampleX4PostProcess, brightPassPostProcess, blurHPostProcesses, blurVPostProcesses, textureAdderPostProcess, volumetricLightPostProcess, volumetricLightSmoothXPostProcess, volumetricLightSmoothYPostProcess, volumetricLightMergePostProces, volumetricLightFinalPostProcess, luminancePostProcess, luminanceDownSamplePostProcesses, hdrPostProcess, textureAdderFinalPostProcess, lensFlareFinalPostProcess, hdrFinalPostProcess, lensFlarePostProcess, lensFlareComposePostProcess, motionBlurPostProcess, depthOfFieldPostProcess, fxaaPostProcess, brightThreshold, blurWidth, horizontalBlur, exposure, lensTexture, volumetricLightCoefficient, volumetricLightPower, volumetricLightBlurScale, sourceLight, hdrMinimumLuminance, hdrDecreaseRate, hdrIncreaseRate, lensColorTexture, lensFlareStrength, lensFlareGhostDispersal, lensFlareHaloWidth, lensFlareDistortionStrength, lensStarTexture, lensFlareDirtTexture, depthOfFieldDistance, depthOfFieldBlurWidth, motionStrength, animations, BloomEnabled, DepthOfFieldEnabled, LensFlareEnabled, HDREnabled, VLSEnabled, MotionBlurEnabled, fxaaEnabled, volumetricLightStepsCount, motionBlurSamples, samples, LuminanceSteps, name, scene, ratio, originalPostProcess, cameras } = props
    this.StandardRenderingPipeline = new BABYLON.StandardRenderingPipeline(name, scene, ratio, originalPostProcess, cameras)
    this.StandardRenderingPipeline.originalPostProcess = originalPostProcess
    this.StandardRenderingPipeline.downSampleX4PostProcess = downSampleX4PostProcess
    this.StandardRenderingPipeline.brightPassPostProcess = brightPassPostProcess
    this.StandardRenderingPipeline.blurHPostProcesses = blurHPostProcesses
    this.StandardRenderingPipeline.blurVPostProcesses = blurVPostProcesses
    this.StandardRenderingPipeline.textureAdderPostProcess = textureAdderPostProcess
    this.StandardRenderingPipeline.volumetricLightPostProcess = volumetricLightPostProcess
    this.StandardRenderingPipeline.volumetricLightSmoothXPostProcess = volumetricLightSmoothXPostProcess
    this.StandardRenderingPipeline.volumetricLightSmoothYPostProcess = volumetricLightSmoothYPostProcess
    this.StandardRenderingPipeline.volumetricLightMergePostProces = volumetricLightMergePostProces
    this.StandardRenderingPipeline.volumetricLightFinalPostProcess = volumetricLightFinalPostProcess
    this.StandardRenderingPipeline.luminancePostProcess = luminancePostProcess
    this.StandardRenderingPipeline.luminanceDownSamplePostProcesses = luminanceDownSamplePostProcesses
    this.StandardRenderingPipeline.hdrPostProcess = hdrPostProcess
    this.StandardRenderingPipeline.textureAdderFinalPostProcess = textureAdderFinalPostProcess
    this.StandardRenderingPipeline.lensFlareFinalPostProcess = lensFlareFinalPostProcess
    this.StandardRenderingPipeline.hdrFinalPostProcess = hdrFinalPostProcess
    this.StandardRenderingPipeline.lensFlarePostProcess = lensFlarePostProcess
    this.StandardRenderingPipeline.lensFlareComposePostProcess = lensFlareComposePostProcess
    this.StandardRenderingPipeline.motionBlurPostProcess = motionBlurPostProcess
    this.StandardRenderingPipeline.depthOfFieldPostProcess = depthOfFieldPostProcess
    this.StandardRenderingPipeline.fxaaPostProcess = fxaaPostProcess
    this.StandardRenderingPipeline.brightThreshold = brightThreshold
    this.StandardRenderingPipeline.blurWidth = blurWidth
    this.StandardRenderingPipeline.horizontalBlur = horizontalBlur
    this.StandardRenderingPipeline.exposure = exposure
    this.StandardRenderingPipeline.lensTexture = lensTexture
    this.StandardRenderingPipeline.volumetricLightCoefficient = volumetricLightCoefficient
    this.StandardRenderingPipeline.volumetricLightPower = volumetricLightPower
    this.StandardRenderingPipeline.volumetricLightBlurScale = volumetricLightBlurScale
    this.StandardRenderingPipeline.sourceLight = sourceLight
    this.StandardRenderingPipeline.hdrMinimumLuminance = hdrMinimumLuminance
    this.StandardRenderingPipeline.hdrDecreaseRate = hdrDecreaseRate
    this.StandardRenderingPipeline.hdrIncreaseRate = hdrIncreaseRate
    this.StandardRenderingPipeline.lensColorTexture = lensColorTexture
    this.StandardRenderingPipeline.lensFlareStrength = lensFlareStrength
    this.StandardRenderingPipeline.lensFlareGhostDispersal = lensFlareGhostDispersal
    this.StandardRenderingPipeline.lensFlareHaloWidth = lensFlareHaloWidth
    this.StandardRenderingPipeline.lensFlareDistortionStrength = lensFlareDistortionStrength
    this.StandardRenderingPipeline.lensStarTexture = lensStarTexture
    this.StandardRenderingPipeline.lensFlareDirtTexture = lensFlareDirtTexture
    this.StandardRenderingPipeline.depthOfFieldDistance = depthOfFieldDistance
    this.StandardRenderingPipeline.depthOfFieldBlurWidth = depthOfFieldBlurWidth
    this.StandardRenderingPipeline.motionStrength = motionStrength
    this.StandardRenderingPipeline.animations = animations
    this.StandardRenderingPipeline.BloomEnabled = BloomEnabled
    this.StandardRenderingPipeline.DepthOfFieldEnabled = DepthOfFieldEnabled
    this.StandardRenderingPipeline.LensFlareEnabled = LensFlareEnabled
    this.StandardRenderingPipeline.HDREnabled = HDREnabled
    this.StandardRenderingPipeline.VLSEnabled = VLSEnabled
    this.StandardRenderingPipeline.MotionBlurEnabled = MotionBlurEnabled
    this.StandardRenderingPipeline.fxaaEnabled = fxaaEnabled
    this.StandardRenderingPipeline.volumetricLightStepsCount = volumetricLightStepsCount
    this.StandardRenderingPipeline.motionBlurSamples = motionBlurSamples
    this.StandardRenderingPipeline.samples = samples
    this.StandardRenderingPipeline.LuminanceSteps = LuminanceSteps
  }

  render () {
    return null
  }
}

export default withScene(StandardRenderingPipeline)

