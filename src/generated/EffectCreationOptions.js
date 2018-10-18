import React from 'react'
import BABYLON from 'babylonjs'

class EffectCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { attributes, uniformsNames, uniformBuffersNames, samplers, defines, fallbacks, onCompiled, onError, indexParameters, maxSimultaneousLights, transformFeedbackVaryings } = props
    this.EffectCreationOptions = new BABYLON.EffectCreationOptions()
    this.EffectCreationOptions.attributes = attributes
    this.EffectCreationOptions.uniformsNames = uniformsNames
    this.EffectCreationOptions.uniformBuffersNames = uniformBuffersNames
    this.EffectCreationOptions.samplers = samplers
    this.EffectCreationOptions.defines = defines
    this.EffectCreationOptions.fallbacks = fallbacks
    this.EffectCreationOptions.onCompiled = onCompiled
    this.EffectCreationOptions.onError = onError
    this.EffectCreationOptions.indexParameters = indexParameters
    this.EffectCreationOptions.maxSimultaneousLights = maxSimultaneousLights
    this.EffectCreationOptions.transformFeedbackVaryings = transformFeedbackVaryings
  }

  render () {
    return null
  }
}

export default EffectCreationOptions

