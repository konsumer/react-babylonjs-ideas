import React from 'react'
import BABYLON from 'babylonjs'

class DummyInternalTextureTracker extends React.Component {
  constructor (props) {
    super(props)
    const { previous, next } = props
    this.DummyInternalTextureTracker = new BABYLON.DummyInternalTextureTracker()
    this.DummyInternalTextureTracker.previous = previous
    this.DummyInternalTextureTracker.next = next
  }

  render () {
    return null
  }
}

export default DummyInternalTextureTracker

