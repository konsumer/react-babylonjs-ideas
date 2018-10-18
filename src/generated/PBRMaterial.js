import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PBRMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { PBRMATERIAL_OPAQUE, PBRMATERIAL_ALPHATEST, PBRMATERIAL_ALPHABLEND, PBRMATERIAL_ALPHATESTANDBLEND, DEFAULT_AO_ON_ANALYTICAL_LIGHTS, directIntensity, emissiveIntensity, environmentIntensity, specularIntensity, disableBumpMap, albedoTexture, ambientTexture, ambientTextureStrength, ambientTextureImpactOnAnalyticalLights, opacityTexture, reflectionTexture, emissiveTexture, reflectivityTexture, metallicTexture, metallic, roughness, microSurfaceTexture, bumpTexture, lightmapTexture, refractionTexture, ambientColor, albedoColor, reflectivityColor, reflectionColor, emissiveColor, microSurface, indexOfRefraction, invertRefractionY, linkRefractionWithTransparency, useLightmapAsShadowmap, useAlphaFromAlbedoTexture, forceAlphaTest, alphaCutOff, useSpecularOverAlpha, useMicroSurfaceFromReflectivityMapAlpha, useRoughnessFromMetallicTextureAlpha, useRoughnessFromMetallicTextureGreen, useMetallnessFromMetallicTextureBlue, useAmbientOcclusionFromMetallicTextureRed, useAmbientInGrayScale, useAutoMicroSurfaceFromReflectivityMap, usePhysicalLightFalloff, useGLTFLightFalloff, useRadianceOverAlpha, useObjectSpaceNormalMap, useParallax, useParallaxOcclusion, parallaxScaleBias, disableLighting, forceIrradianceInFragment, maxSimultaneousLights, invertNormalMapX, invertNormalMapY, twoSidedLighting, useAlphaFresnel, useLinearAlphaFresnel, environmentBRDFTexture, forceNormalForward, enableSpecularAntiAliasing, useHorizonOcclusion, useRadianceOcclusion, unlit, imageProcessingConfiguration, cameraColorCurvesEnabled, cameraColorGradingEnabled, cameraToneMappingEnabled, cameraExposure, cameraContrast, cameraColorGradingTexture, cameraColorCurves, name, scene } = props
    this.PBRMaterial = new BABYLON.PBRMaterial(name, scene)
    this.PBRMaterial.PBRMATERIAL_OPAQUE = PBRMATERIAL_OPAQUE
    this.PBRMaterial.PBRMATERIAL_ALPHATEST = PBRMATERIAL_ALPHATEST
    this.PBRMaterial.PBRMATERIAL_ALPHABLEND = PBRMATERIAL_ALPHABLEND
    this.PBRMaterial.PBRMATERIAL_ALPHATESTANDBLEND = PBRMATERIAL_ALPHATESTANDBLEND
    this.PBRMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = DEFAULT_AO_ON_ANALYTICAL_LIGHTS
    this.PBRMaterial.directIntensity = directIntensity
    this.PBRMaterial.emissiveIntensity = emissiveIntensity
    this.PBRMaterial.environmentIntensity = environmentIntensity
    this.PBRMaterial.specularIntensity = specularIntensity
    this.PBRMaterial.disableBumpMap = disableBumpMap
    this.PBRMaterial.albedoTexture = albedoTexture
    this.PBRMaterial.ambientTexture = ambientTexture
    this.PBRMaterial.ambientTextureStrength = ambientTextureStrength
    this.PBRMaterial.ambientTextureImpactOnAnalyticalLights = ambientTextureImpactOnAnalyticalLights
    this.PBRMaterial.opacityTexture = opacityTexture
    this.PBRMaterial.reflectionTexture = reflectionTexture
    this.PBRMaterial.emissiveTexture = emissiveTexture
    this.PBRMaterial.reflectivityTexture = reflectivityTexture
    this.PBRMaterial.metallicTexture = metallicTexture
    this.PBRMaterial.metallic = metallic
    this.PBRMaterial.roughness = roughness
    this.PBRMaterial.microSurfaceTexture = microSurfaceTexture
    this.PBRMaterial.bumpTexture = bumpTexture
    this.PBRMaterial.lightmapTexture = lightmapTexture
    this.PBRMaterial.refractionTexture = refractionTexture
    this.PBRMaterial.ambientColor = ambientColor
    this.PBRMaterial.albedoColor = albedoColor
    this.PBRMaterial.reflectivityColor = reflectivityColor
    this.PBRMaterial.reflectionColor = reflectionColor
    this.PBRMaterial.emissiveColor = emissiveColor
    this.PBRMaterial.microSurface = microSurface
    this.PBRMaterial.indexOfRefraction = indexOfRefraction
    this.PBRMaterial.invertRefractionY = invertRefractionY
    this.PBRMaterial.linkRefractionWithTransparency = linkRefractionWithTransparency
    this.PBRMaterial.useLightmapAsShadowmap = useLightmapAsShadowmap
    this.PBRMaterial.useAlphaFromAlbedoTexture = useAlphaFromAlbedoTexture
    this.PBRMaterial.forceAlphaTest = forceAlphaTest
    this.PBRMaterial.alphaCutOff = alphaCutOff
    this.PBRMaterial.useSpecularOverAlpha = useSpecularOverAlpha
    this.PBRMaterial.useMicroSurfaceFromReflectivityMapAlpha = useMicroSurfaceFromReflectivityMapAlpha
    this.PBRMaterial.useRoughnessFromMetallicTextureAlpha = useRoughnessFromMetallicTextureAlpha
    this.PBRMaterial.useRoughnessFromMetallicTextureGreen = useRoughnessFromMetallicTextureGreen
    this.PBRMaterial.useMetallnessFromMetallicTextureBlue = useMetallnessFromMetallicTextureBlue
    this.PBRMaterial.useAmbientOcclusionFromMetallicTextureRed = useAmbientOcclusionFromMetallicTextureRed
    this.PBRMaterial.useAmbientInGrayScale = useAmbientInGrayScale
    this.PBRMaterial.useAutoMicroSurfaceFromReflectivityMap = useAutoMicroSurfaceFromReflectivityMap
    this.PBRMaterial.usePhysicalLightFalloff = usePhysicalLightFalloff
    this.PBRMaterial.useGLTFLightFalloff = useGLTFLightFalloff
    this.PBRMaterial.useRadianceOverAlpha = useRadianceOverAlpha
    this.PBRMaterial.useObjectSpaceNormalMap = useObjectSpaceNormalMap
    this.PBRMaterial.useParallax = useParallax
    this.PBRMaterial.useParallaxOcclusion = useParallaxOcclusion
    this.PBRMaterial.parallaxScaleBias = parallaxScaleBias
    this.PBRMaterial.disableLighting = disableLighting
    this.PBRMaterial.forceIrradianceInFragment = forceIrradianceInFragment
    this.PBRMaterial.maxSimultaneousLights = maxSimultaneousLights
    this.PBRMaterial.invertNormalMapX = invertNormalMapX
    this.PBRMaterial.invertNormalMapY = invertNormalMapY
    this.PBRMaterial.twoSidedLighting = twoSidedLighting
    this.PBRMaterial.useAlphaFresnel = useAlphaFresnel
    this.PBRMaterial.useLinearAlphaFresnel = useLinearAlphaFresnel
    this.PBRMaterial.environmentBRDFTexture = environmentBRDFTexture
    this.PBRMaterial.forceNormalForward = forceNormalForward
    this.PBRMaterial.enableSpecularAntiAliasing = enableSpecularAntiAliasing
    this.PBRMaterial.useHorizonOcclusion = useHorizonOcclusion
    this.PBRMaterial.useRadianceOcclusion = useRadianceOcclusion
    this.PBRMaterial.unlit = unlit
    this.PBRMaterial.imageProcessingConfiguration = imageProcessingConfiguration
    this.PBRMaterial.cameraColorCurvesEnabled = cameraColorCurvesEnabled
    this.PBRMaterial.cameraColorGradingEnabled = cameraColorGradingEnabled
    this.PBRMaterial.cameraToneMappingEnabled = cameraToneMappingEnabled
    this.PBRMaterial.cameraExposure = cameraExposure
    this.PBRMaterial.cameraContrast = cameraContrast
    this.PBRMaterial.cameraColorGradingTexture = cameraColorGradingTexture
    this.PBRMaterial.cameraColorCurves = cameraColorCurves
  }

  render () {
    return null
  }
}

export default withScene(PBRMaterial)

