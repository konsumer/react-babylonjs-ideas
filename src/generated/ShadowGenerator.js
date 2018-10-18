import React from 'react'
import BABYLON from 'babylonjs'

class ShadowGenerator extends React.Component {
  constructor (props) {
    super(props)
    const { FILTER_NONE, FILTER_EXPONENTIALSHADOWMAP, FILTER_POISSONSAMPLING, FILTER_BLUREXPONENTIALSHADOWMAP, FILTER_CLOSEEXPONENTIALSHADOWMAP, FILTER_BLURCLOSEEXPONENTIALSHADOWMAP, FILTER_PCF, FILTER_PCSS, QUALITY_HIGH, QUALITY_MEDIUM, QUALITY_LOW, bias, normalBias, blurBoxOffset, blurScale, blurKernel, useKernelBlur, depthScale, filter, usePoissonSampling, useVarianceShadowMap, useBlurVarianceShadowMap, useExponentialShadowMap, useBlurExponentialShadowMap, useCloseExponentialShadowMap, useBlurCloseExponentialShadowMap, usePercentageCloserFiltering, filteringQuality, useContactHardeningShadow, contactHardeningLightSizeUVRatio, frustumEdgeFalloff, forceBackFacesOnly, mapSize, light, useFullFloatFirst } = props
    this.ShadowGenerator = new BABYLON.ShadowGenerator(mapSize, light, useFullFloatFirst)
    this.ShadowGenerator.FILTER_NONE = FILTER_NONE
    this.ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP = FILTER_EXPONENTIALSHADOWMAP
    this.ShadowGenerator.FILTER_POISSONSAMPLING = FILTER_POISSONSAMPLING
    this.ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP = FILTER_BLUREXPONENTIALSHADOWMAP
    this.ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP = FILTER_CLOSEEXPONENTIALSHADOWMAP
    this.ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = FILTER_BLURCLOSEEXPONENTIALSHADOWMAP
    this.ShadowGenerator.FILTER_PCF = FILTER_PCF
    this.ShadowGenerator.FILTER_PCSS = FILTER_PCSS
    this.ShadowGenerator.QUALITY_HIGH = QUALITY_HIGH
    this.ShadowGenerator.QUALITY_MEDIUM = QUALITY_MEDIUM
    this.ShadowGenerator.QUALITY_LOW = QUALITY_LOW
    this.ShadowGenerator.bias = bias
    this.ShadowGenerator.normalBias = normalBias
    this.ShadowGenerator.blurBoxOffset = blurBoxOffset
    this.ShadowGenerator.blurScale = blurScale
    this.ShadowGenerator.blurKernel = blurKernel
    this.ShadowGenerator.useKernelBlur = useKernelBlur
    this.ShadowGenerator.depthScale = depthScale
    this.ShadowGenerator.filter = filter
    this.ShadowGenerator.usePoissonSampling = usePoissonSampling
    this.ShadowGenerator.useVarianceShadowMap = useVarianceShadowMap
    this.ShadowGenerator.useBlurVarianceShadowMap = useBlurVarianceShadowMap
    this.ShadowGenerator.useExponentialShadowMap = useExponentialShadowMap
    this.ShadowGenerator.useBlurExponentialShadowMap = useBlurExponentialShadowMap
    this.ShadowGenerator.useCloseExponentialShadowMap = useCloseExponentialShadowMap
    this.ShadowGenerator.useBlurCloseExponentialShadowMap = useBlurCloseExponentialShadowMap
    this.ShadowGenerator.usePercentageCloserFiltering = usePercentageCloserFiltering
    this.ShadowGenerator.filteringQuality = filteringQuality
    this.ShadowGenerator.useContactHardeningShadow = useContactHardeningShadow
    this.ShadowGenerator.contactHardeningLightSizeUVRatio = contactHardeningLightSizeUVRatio
    this.ShadowGenerator.frustumEdgeFalloff = frustumEdgeFalloff
    this.ShadowGenerator.forceBackFacesOnly = forceBackFacesOnly
  }

  render () {
    return null
  }
}

export default ShadowGenerator

