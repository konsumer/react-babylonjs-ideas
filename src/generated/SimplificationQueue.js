import React from 'react'
import BABYLON from 'babylonjs'

class SimplificationQueue extends React.Component {
  constructor (props) {
    super(props)
    const { running, getSimplifier } = props
    this.SimplificationQueue = new BABYLON.SimplificationQueue()
    this.SimplificationQueue.running = running
    this.SimplificationQueue.getSimplifier = getSimplifier
  }

  render () {
    return null
  }
}

export default SimplificationQueue

