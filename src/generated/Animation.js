import React from 'react'

class Animation extends React.Component {
  constructor (props) {
    super(props)
    const { name, targetProperty, framePerSecond, dataType, loopMode, enableBlending, targetPropertyPath, blendingSpeed, runtimeAnimations, hasRunningRuntimeAnimations } = props
    this.Animation = new Animation(name, targetProperty, framePerSecond, dataType, loopMode, enableBlending, targetPropertyPath, blendingSpeed, runtimeAnimations, hasRunningRuntimeAnimations)
  }

  render () {
    return null
  }
}

export default Animation

