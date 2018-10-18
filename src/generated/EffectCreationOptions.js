import React from 'react'

class EffectCreationOptions extends React.Component {
  constructor (props) {
    super(props)
    const { attributes, uniformsNames, uniformBuffersNames, samplers, defines, fallbacks, onCompiled, onError, indexParameters, maxSimultaneousLights, transformFeedbackVaryings } = props
    this.EffectCreationOptions = new EffectCreationOptions(attributes, uniformsNames, uniformBuffersNames, samplers, defines, fallbacks, onCompiled, onError, indexParameters, maxSimultaneousLights, transformFeedbackVaryings)
  }

  render () {
    return null
  }
}

export default EffectCreationOptions

