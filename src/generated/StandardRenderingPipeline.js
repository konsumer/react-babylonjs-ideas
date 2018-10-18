import React from 'react'

class StandardRenderingPipeline extends React.Component {
  constructor (props) {
    super(props)
    const { originalPostProcess, downSampleX4PostProcess, brightPassPostProcess, blurHPostProcesses, blurVPostProcesses, textureAdderPostProcess, volumetricLightPostProcess, volumetricLightSmoothXPostProcess, volumetricLightSmoothYPostProcess, volumetricLightMergePostProces, volumetricLightFinalPostProcess, luminancePostProcess, luminanceDownSamplePostProcesses, hdrPostProcess, textureAdderFinalPostProcess, lensFlareFinalPostProcess, hdrFinalPostProcess, lensFlarePostProcess, lensFlareComposePostProcess, motionBlurPostProcess, depthOfFieldPostProcess, fxaaPostProcess, brightThreshold, blurWidth, horizontalBlur, exposure, lensTexture, volumetricLightCoefficient, volumetricLightPower, volumetricLightBlurScale, sourceLight, hdrMinimumLuminance, hdrDecreaseRate, hdrIncreaseRate, lensColorTexture, lensFlareStrength, lensFlareGhostDispersal, lensFlareHaloWidth, lensFlareDistortionStrength, lensStarTexture, lensFlareDirtTexture, depthOfFieldDistance, depthOfFieldBlurWidth, motionStrength, animations, BloomEnabled, DepthOfFieldEnabled, LensFlareEnabled, HDREnabled, VLSEnabled, MotionBlurEnabled, fxaaEnabled, volumetricLightStepsCount, motionBlurSamples, samples } = props
    this.StandardRenderingPipeline = new StandardRenderingPipeline(originalPostProcess, downSampleX4PostProcess, brightPassPostProcess, blurHPostProcesses, blurVPostProcesses, textureAdderPostProcess, volumetricLightPostProcess, volumetricLightSmoothXPostProcess, volumetricLightSmoothYPostProcess, volumetricLightMergePostProces, volumetricLightFinalPostProcess, luminancePostProcess, luminanceDownSamplePostProcesses, hdrPostProcess, textureAdderFinalPostProcess, lensFlareFinalPostProcess, hdrFinalPostProcess, lensFlarePostProcess, lensFlareComposePostProcess, motionBlurPostProcess, depthOfFieldPostProcess, fxaaPostProcess, brightThreshold, blurWidth, horizontalBlur, exposure, lensTexture, volumetricLightCoefficient, volumetricLightPower, volumetricLightBlurScale, sourceLight, hdrMinimumLuminance, hdrDecreaseRate, hdrIncreaseRate, lensColorTexture, lensFlareStrength, lensFlareGhostDispersal, lensFlareHaloWidth, lensFlareDistortionStrength, lensStarTexture, lensFlareDirtTexture, depthOfFieldDistance, depthOfFieldBlurWidth, motionStrength, animations, BloomEnabled, DepthOfFieldEnabled, LensFlareEnabled, HDREnabled, VLSEnabled, MotionBlurEnabled, fxaaEnabled, volumetricLightStepsCount, motionBlurSamples, samples)
  }

  render () {
    return null
  }
}

export default StandardRenderingPipeline

