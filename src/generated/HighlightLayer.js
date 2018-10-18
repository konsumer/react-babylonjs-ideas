import React from 'react'

class HighlightLayer extends React.Component {
  constructor (props) {
    super(props)
    const { name, innerGlow, outerGlow, blurHorizontalSize, blurVerticalSize, onBeforeBlurObservable, onAfterBlurObservable } = props
    this.HighlightLayer = new HighlightLayer(name, innerGlow, outerGlow, blurHorizontalSize, blurVerticalSize, onBeforeBlurObservable, onAfterBlurObservable)
  }

  render () {
    return null
  }
}

export default HighlightLayer

