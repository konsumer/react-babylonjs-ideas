import React from 'react'

class DebugLayer extends React.Component {
  constructor (props) {
    super(props)
    const { BJSINSPECTOR, onPropertyChangedObservable } = props
    this.DebugLayer = new DebugLayer(BJSINSPECTOR, onPropertyChangedObservable)
  }

  render () {
    return null
  }
}

export default DebugLayer

