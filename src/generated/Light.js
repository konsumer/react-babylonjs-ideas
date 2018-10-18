import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Light extends React.Component {
  constructor (props) {
    super(props)
    const { FALLOFF_DEFAULT, FALLOFF_PHYSICAL, FALLOFF_GLTF, FALLOFF_STANDARD, LIGHTMAP_DEFAULT, LIGHTMAP_SPECULAR, LIGHTMAP_SHADOWSONLY, INTENSITYMODE_AUTOMATIC, INTENSITYMODE_LUMINOUSPOWER, INTENSITYMODE_LUMINOUSINTENSITY, INTENSITYMODE_ILLUMINANCE, INTENSITYMODE_LUMINANCE, LIGHTTYPEID_POINTLIGHT, LIGHTTYPEID_DIRECTIONALLIGHT, LIGHTTYPEID_SPOTLIGHT, LIGHTTYPEID_HEMISPHERICLIGHT, diffuse, specular, falloffType, intensity, range, intensityMode, radius, renderPriority, shadowEnabled, includedOnlyMeshes, excludedMeshes, excludeWithLayerMask, includeOnlyWithLayerMask, lightmapMode, name, scene } = props
    this.Light = new BABYLON.Light(name, scene)
    this.Light.FALLOFF_DEFAULT = FALLOFF_DEFAULT
    this.Light.FALLOFF_PHYSICAL = FALLOFF_PHYSICAL
    this.Light.FALLOFF_GLTF = FALLOFF_GLTF
    this.Light.FALLOFF_STANDARD = FALLOFF_STANDARD
    this.Light.LIGHTMAP_DEFAULT = LIGHTMAP_DEFAULT
    this.Light.LIGHTMAP_SPECULAR = LIGHTMAP_SPECULAR
    this.Light.LIGHTMAP_SHADOWSONLY = LIGHTMAP_SHADOWSONLY
    this.Light.INTENSITYMODE_AUTOMATIC = INTENSITYMODE_AUTOMATIC
    this.Light.INTENSITYMODE_LUMINOUSPOWER = INTENSITYMODE_LUMINOUSPOWER
    this.Light.INTENSITYMODE_LUMINOUSINTENSITY = INTENSITYMODE_LUMINOUSINTENSITY
    this.Light.INTENSITYMODE_ILLUMINANCE = INTENSITYMODE_ILLUMINANCE
    this.Light.INTENSITYMODE_LUMINANCE = INTENSITYMODE_LUMINANCE
    this.Light.LIGHTTYPEID_POINTLIGHT = LIGHTTYPEID_POINTLIGHT
    this.Light.LIGHTTYPEID_DIRECTIONALLIGHT = LIGHTTYPEID_DIRECTIONALLIGHT
    this.Light.LIGHTTYPEID_SPOTLIGHT = LIGHTTYPEID_SPOTLIGHT
    this.Light.LIGHTTYPEID_HEMISPHERICLIGHT = LIGHTTYPEID_HEMISPHERICLIGHT
    this.Light.diffuse = diffuse
    this.Light.specular = specular
    this.Light.falloffType = falloffType
    this.Light.intensity = intensity
    this.Light.range = range
    this.Light.intensityMode = intensityMode
    this.Light.radius = radius
    this.Light.renderPriority = renderPriority
    this.Light.shadowEnabled = shadowEnabled
    this.Light.includedOnlyMeshes = includedOnlyMeshes
    this.Light.excludedMeshes = excludedMeshes
    this.Light.excludeWithLayerMask = excludeWithLayerMask
    this.Light.includeOnlyWithLayerMask = includeOnlyWithLayerMask
    this.Light.lightmapMode = lightmapMode
  }

  render () {
    return null
  }
}

export default withScene(Light)

