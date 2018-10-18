import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class StandardMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { diffuseTexture, ambientTexture, opacityTexture, reflectionTexture, emissiveTexture, specularTexture, bumpTexture, lightmapTexture, refractionTexture, ambientColor, diffuseColor, specularColor, emissiveColor, specularPower, useAlphaFromDiffuseTexture, useEmissiveAsIllumination, linkEmissiveWithDiffuse, useSpecularOverAlpha, useReflectionOverAlpha, disableLighting, useObjectSpaceNormalMap, useParallax, useParallaxOcclusion, parallaxScaleBias, roughness, indexOfRefraction, invertRefractionY, alphaCutOff, useLightmapAsShadowmap, diffuseFresnelParameters, opacityFresnelParameters, reflectionFresnelParameters, refractionFresnelParameters, emissiveFresnelParameters, useReflectionFresnelFromSpecular, useGlossinessFromSpecularMapAlpha, maxSimultaneousLights, invertNormalMapX, invertNormalMapY, twoSidedLighting, imageProcessingConfiguration, cameraColorCurvesEnabled, cameraColorGradingEnabled, cameraToneMappingEnabled, cameraExposure, cameraContrast, cameraColorGradingTexture, cameraColorCurves, customShaderNameResolve, hasRenderTargetTextures, useLogarithmicDepth, DiffuseTextureEnabled, AmbientTextureEnabled, OpacityTextureEnabled, ReflectionTextureEnabled, EmissiveTextureEnabled, SpecularTextureEnabled, BumpTextureEnabled, LightmapTextureEnabled, RefractionTextureEnabled, ColorGradingTextureEnabled, FresnelEnabled, name, scene } = props
    this.StandardMaterial = new BABYLON.StandardMaterial(name, scene)
    this.StandardMaterial.diffuseTexture = diffuseTexture
    this.StandardMaterial.ambientTexture = ambientTexture
    this.StandardMaterial.opacityTexture = opacityTexture
    this.StandardMaterial.reflectionTexture = reflectionTexture
    this.StandardMaterial.emissiveTexture = emissiveTexture
    this.StandardMaterial.specularTexture = specularTexture
    this.StandardMaterial.bumpTexture = bumpTexture
    this.StandardMaterial.lightmapTexture = lightmapTexture
    this.StandardMaterial.refractionTexture = refractionTexture
    this.StandardMaterial.ambientColor = ambientColor
    this.StandardMaterial.diffuseColor = diffuseColor
    this.StandardMaterial.specularColor = specularColor
    this.StandardMaterial.emissiveColor = emissiveColor
    this.StandardMaterial.specularPower = specularPower
    this.StandardMaterial.useAlphaFromDiffuseTexture = useAlphaFromDiffuseTexture
    this.StandardMaterial.useEmissiveAsIllumination = useEmissiveAsIllumination
    this.StandardMaterial.linkEmissiveWithDiffuse = linkEmissiveWithDiffuse
    this.StandardMaterial.useSpecularOverAlpha = useSpecularOverAlpha
    this.StandardMaterial.useReflectionOverAlpha = useReflectionOverAlpha
    this.StandardMaterial.disableLighting = disableLighting
    this.StandardMaterial.useObjectSpaceNormalMap = useObjectSpaceNormalMap
    this.StandardMaterial.useParallax = useParallax
    this.StandardMaterial.useParallaxOcclusion = useParallaxOcclusion
    this.StandardMaterial.parallaxScaleBias = parallaxScaleBias
    this.StandardMaterial.roughness = roughness
    this.StandardMaterial.indexOfRefraction = indexOfRefraction
    this.StandardMaterial.invertRefractionY = invertRefractionY
    this.StandardMaterial.alphaCutOff = alphaCutOff
    this.StandardMaterial.useLightmapAsShadowmap = useLightmapAsShadowmap
    this.StandardMaterial.diffuseFresnelParameters = diffuseFresnelParameters
    this.StandardMaterial.opacityFresnelParameters = opacityFresnelParameters
    this.StandardMaterial.reflectionFresnelParameters = reflectionFresnelParameters
    this.StandardMaterial.refractionFresnelParameters = refractionFresnelParameters
    this.StandardMaterial.emissiveFresnelParameters = emissiveFresnelParameters
    this.StandardMaterial.useReflectionFresnelFromSpecular = useReflectionFresnelFromSpecular
    this.StandardMaterial.useGlossinessFromSpecularMapAlpha = useGlossinessFromSpecularMapAlpha
    this.StandardMaterial.maxSimultaneousLights = maxSimultaneousLights
    this.StandardMaterial.invertNormalMapX = invertNormalMapX
    this.StandardMaterial.invertNormalMapY = invertNormalMapY
    this.StandardMaterial.twoSidedLighting = twoSidedLighting
    this.StandardMaterial.imageProcessingConfiguration = imageProcessingConfiguration
    this.StandardMaterial.cameraColorCurvesEnabled = cameraColorCurvesEnabled
    this.StandardMaterial.cameraColorGradingEnabled = cameraColorGradingEnabled
    this.StandardMaterial.cameraToneMappingEnabled = cameraToneMappingEnabled
    this.StandardMaterial.cameraExposure = cameraExposure
    this.StandardMaterial.cameraContrast = cameraContrast
    this.StandardMaterial.cameraColorGradingTexture = cameraColorGradingTexture
    this.StandardMaterial.cameraColorCurves = cameraColorCurves
    this.StandardMaterial.customShaderNameResolve = customShaderNameResolve
    this.StandardMaterial.hasRenderTargetTextures = hasRenderTargetTextures
    this.StandardMaterial.useLogarithmicDepth = useLogarithmicDepth
    this.StandardMaterial.DiffuseTextureEnabled = DiffuseTextureEnabled
    this.StandardMaterial.AmbientTextureEnabled = AmbientTextureEnabled
    this.StandardMaterial.OpacityTextureEnabled = OpacityTextureEnabled
    this.StandardMaterial.ReflectionTextureEnabled = ReflectionTextureEnabled
    this.StandardMaterial.EmissiveTextureEnabled = EmissiveTextureEnabled
    this.StandardMaterial.SpecularTextureEnabled = SpecularTextureEnabled
    this.StandardMaterial.BumpTextureEnabled = BumpTextureEnabled
    this.StandardMaterial.LightmapTextureEnabled = LightmapTextureEnabled
    this.StandardMaterial.RefractionTextureEnabled = RefractionTextureEnabled
    this.StandardMaterial.ColorGradingTextureEnabled = ColorGradingTextureEnabled
    this.StandardMaterial.FresnelEnabled = FresnelEnabled
  }

  render () {
    return null
  }
}

export default withScene(StandardMaterial)

