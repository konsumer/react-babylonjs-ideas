import React from 'react'
import BABYLON from 'babylonjs'

class EngineCapabilities extends React.Component {
  constructor (props) {
    super(props)
    const { maxTexturesImageUnits, maxVertexTextureImageUnits, maxCombinedTexturesImageUnits, maxTextureSize, maxCubemapTextureSize, maxRenderTextureSize, maxVertexAttribs, maxVaryingVectors, maxVertexUniformVectors, maxFragmentUniformVectors, standardDerivatives, s3tc, pvrtc, etc1, etc2, astc, textureFloat, vertexArrayObject, textureAnisotropicFilterExtension, maxAnisotropy, instancedArrays, uintIndices, highPrecisionShaderSupported, fragmentDepthSupported, textureFloatLinearFiltering, textureFloatRender, textureHalfFloat, textureHalfFloatLinearFiltering, textureHalfFloatRender, textureLOD, drawBuffersExtension, depthTextureExtension, colorBufferFloat, timerQuery, canUseTimestampForTimerQuery } = props
    this.EngineCapabilities = new BABYLON.EngineCapabilities()
    this.EngineCapabilities.maxTexturesImageUnits = maxTexturesImageUnits
    this.EngineCapabilities.maxVertexTextureImageUnits = maxVertexTextureImageUnits
    this.EngineCapabilities.maxCombinedTexturesImageUnits = maxCombinedTexturesImageUnits
    this.EngineCapabilities.maxTextureSize = maxTextureSize
    this.EngineCapabilities.maxCubemapTextureSize = maxCubemapTextureSize
    this.EngineCapabilities.maxRenderTextureSize = maxRenderTextureSize
    this.EngineCapabilities.maxVertexAttribs = maxVertexAttribs
    this.EngineCapabilities.maxVaryingVectors = maxVaryingVectors
    this.EngineCapabilities.maxVertexUniformVectors = maxVertexUniformVectors
    this.EngineCapabilities.maxFragmentUniformVectors = maxFragmentUniformVectors
    this.EngineCapabilities.standardDerivatives = standardDerivatives
    this.EngineCapabilities.s3tc = s3tc
    this.EngineCapabilities.pvrtc = pvrtc
    this.EngineCapabilities.etc1 = etc1
    this.EngineCapabilities.etc2 = etc2
    this.EngineCapabilities.astc = astc
    this.EngineCapabilities.textureFloat = textureFloat
    this.EngineCapabilities.vertexArrayObject = vertexArrayObject
    this.EngineCapabilities.textureAnisotropicFilterExtension = textureAnisotropicFilterExtension
    this.EngineCapabilities.maxAnisotropy = maxAnisotropy
    this.EngineCapabilities.instancedArrays = instancedArrays
    this.EngineCapabilities.uintIndices = uintIndices
    this.EngineCapabilities.highPrecisionShaderSupported = highPrecisionShaderSupported
    this.EngineCapabilities.fragmentDepthSupported = fragmentDepthSupported
    this.EngineCapabilities.textureFloatLinearFiltering = textureFloatLinearFiltering
    this.EngineCapabilities.textureFloatRender = textureFloatRender
    this.EngineCapabilities.textureHalfFloat = textureHalfFloat
    this.EngineCapabilities.textureHalfFloatLinearFiltering = textureHalfFloatLinearFiltering
    this.EngineCapabilities.textureHalfFloatRender = textureHalfFloatRender
    this.EngineCapabilities.textureLOD = textureLOD
    this.EngineCapabilities.drawBuffersExtension = drawBuffersExtension
    this.EngineCapabilities.depthTextureExtension = depthTextureExtension
    this.EngineCapabilities.colorBufferFloat = colorBufferFloat
    this.EngineCapabilities.timerQuery = timerQuery
    this.EngineCapabilities.canUseTimestampForTimerQuery = canUseTimestampForTimerQuery
  }

  render () {
    return null
  }
}

export default EngineCapabilities

