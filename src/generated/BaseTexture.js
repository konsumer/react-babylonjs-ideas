import React from 'react'

class BaseTexture extends React.Component {
  constructor (props) {
    super(props)
    const { name, hasAlpha, getAlphaFromRGB, level, coordinatesIndex, coordinatesMode, wrapU, wrapV, wrapR, anisotropicFilteringLevel, isCube, is3D, gammaSpace, isRGBD, invertZ, lodLevelInAlpha, lodGenerationOffset, lodGenerationScale, isRenderTarget, uid, animations, onDisposeObservable, onDispose, delayLoadState, isBlocking, canRescale, textureType, textureFormat, sphericalPolynomial } = props
    this.BaseTexture = new BaseTexture(name, hasAlpha, getAlphaFromRGB, level, coordinatesIndex, coordinatesMode, wrapU, wrapV, wrapR, anisotropicFilteringLevel, isCube, is3D, gammaSpace, isRGBD, invertZ, lodLevelInAlpha, lodGenerationOffset, lodGenerationScale, isRenderTarget, uid, animations, onDisposeObservable, onDispose, delayLoadState, isBlocking, canRescale, textureType, textureFormat, sphericalPolynomial)
  }

  render () {
    return null
  }
}

export default BaseTexture

