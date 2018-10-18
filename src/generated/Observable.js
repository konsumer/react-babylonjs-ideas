import React from 'react'
import BABYLON from 'babylonjs'

class Observable extends React.Component {
  constructor (props) {
    super(props)
    const { onObserverAdded } = props
    this.Observable = new BABYLON.Observable(onObserverAdded)
    
  }

  render () {
    return null
  }
}

export default Observable

