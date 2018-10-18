import React from 'react'

class Layer extends React.Component {
  constructor (props) {
    super(props)
    const { name, texture, isBackground, color, scale, offset, alphaBlendingMode, alphaTest, layerMask, onDisposeObservable, onDispose, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender } = props
    this.Layer = new Layer(name, texture, isBackground, color, scale, offset, alphaBlendingMode, alphaTest, layerMask, onDisposeObservable, onDispose, onBeforeRenderObservable, onBeforeRender, onAfterRenderObservable, onAfterRender)
  }

  render () {
    return null
  }
}

export default Layer

