import React from 'react'

class ProceduralTexture extends React.Component {
  constructor (props) {
    super(props)
    const { isCube, isEnabled, autoClear, onGenerated, onGeneratedObservable, refreshRate } = props
    this.ProceduralTexture = new ProceduralTexture(isCube, isEnabled, autoClear, onGenerated, onGeneratedObservable, refreshRate)
  }

  render () {
    return null
  }
}

export default ProceduralTexture

