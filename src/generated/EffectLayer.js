import React from 'react'

class EffectLayer extends React.Component {
  constructor (props) {
    super(props)
    const { name, neutralColor, isEnabled, camera, renderingGroupId, onDisposeObservable, onBeforeRenderMainTextureObservable, onBeforeComposeObservable, onAfterComposeObservable, onSizeChangedObservable } = props
    this.EffectLayer = new EffectLayer(name, neutralColor, isEnabled, camera, renderingGroupId, onDisposeObservable, onBeforeRenderMainTextureObservable, onBeforeComposeObservable, onAfterComposeObservable, onSizeChangedObservable)
  }

  render () {
    return null
  }
}

export default EffectLayer

