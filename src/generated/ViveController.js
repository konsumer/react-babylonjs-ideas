import React from 'react'

class ViveController extends React.Component {
  constructor (props) {
    super(props)
    const { onLeftButtonStateChangedObservable, onRightButtonStateChangedObservable, onMenuButtonStateChangedObservable } = props
    this.ViveController = new ViveController(onLeftButtonStateChangedObservable, onRightButtonStateChangedObservable, onMenuButtonStateChangedObservable)
  }

  render () {
    return null
  }
}

export default ViveController

