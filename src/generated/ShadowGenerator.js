import React from 'react'

class ShadowGenerator extends React.Component {
  constructor (props) {
    super(props)
    const { bias, normalBias, blurBoxOffset, blurScale, blurKernel, useKernelBlur, depthScale, filter, usePoissonSampling, useVarianceShadowMap, useBlurVarianceShadowMap, useExponentialShadowMap, useBlurExponentialShadowMap, useCloseExponentialShadowMap, useBlurCloseExponentialShadowMap, usePercentageCloserFiltering, filteringQuality, useContactHardeningShadow, contactHardeningLightSizeUVRatio, frustumEdgeFalloff, forceBackFacesOnly } = props
    this.ShadowGenerator = new ShadowGenerator(bias, normalBias, blurBoxOffset, blurScale, blurKernel, useKernelBlur, depthScale, filter, usePoissonSampling, useVarianceShadowMap, useBlurVarianceShadowMap, useExponentialShadowMap, useBlurExponentialShadowMap, useCloseExponentialShadowMap, useBlurCloseExponentialShadowMap, usePercentageCloserFiltering, filteringQuality, useContactHardeningShadow, contactHardeningLightSizeUVRatio, frustumEdgeFalloff, forceBackFacesOnly)
  }

  render () {
    return null
  }
}

export default ShadowGenerator

