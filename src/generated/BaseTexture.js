import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class BaseTexture extends React.Component {
  constructor (props) {
    super(props)
    const { DEFAULT_ANISOTROPIC_FILTERING_LEVEL, name, hasAlpha, getAlphaFromRGB, level, coordinatesIndex, coordinatesMode, wrapU, wrapV, wrapR, anisotropicFilteringLevel, isCube, is3D, gammaSpace, isRGBD, invertZ, lodLevelInAlpha, lodGenerationOffset, lodGenerationScale, isRenderTarget, uid, animations, onDisposeObservable, onDispose, delayLoadState, isBlocking, canRescale, textureType, textureFormat, sphericalPolynomial, scene } = props
    this.BaseTexture = new BABYLON.BaseTexture(scene)
    this.BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = DEFAULT_ANISOTROPIC_FILTERING_LEVEL
    this.BaseTexture.name = name
    this.BaseTexture.hasAlpha = hasAlpha
    this.BaseTexture.getAlphaFromRGB = getAlphaFromRGB
    this.BaseTexture.level = level
    this.BaseTexture.coordinatesIndex = coordinatesIndex
    this.BaseTexture.coordinatesMode = coordinatesMode
    this.BaseTexture.wrapU = wrapU
    this.BaseTexture.wrapV = wrapV
    this.BaseTexture.wrapR = wrapR
    this.BaseTexture.anisotropicFilteringLevel = anisotropicFilteringLevel
    this.BaseTexture.isCube = isCube
    this.BaseTexture.is3D = is3D
    this.BaseTexture.gammaSpace = gammaSpace
    this.BaseTexture.isRGBD = isRGBD
    this.BaseTexture.invertZ = invertZ
    this.BaseTexture.lodLevelInAlpha = lodLevelInAlpha
    this.BaseTexture.lodGenerationOffset = lodGenerationOffset
    this.BaseTexture.lodGenerationScale = lodGenerationScale
    this.BaseTexture.isRenderTarget = isRenderTarget
    this.BaseTexture.uid = uid
    this.BaseTexture.animations = animations
    this.BaseTexture.onDisposeObservable = onDisposeObservable
    this.BaseTexture.onDispose = onDispose
    this.BaseTexture.delayLoadState = delayLoadState
    this.BaseTexture.isBlocking = isBlocking
    this.BaseTexture.canRescale = canRescale
    this.BaseTexture.textureType = textureType
    this.BaseTexture.textureFormat = textureFormat
    this.BaseTexture.sphericalPolynomial = sphericalPolynomial
  }

  render () {
    return null
  }
}

export default withScene(BaseTexture)

