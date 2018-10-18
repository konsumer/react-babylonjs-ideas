import React from 'react'
import BABYLON from 'babylonjs'

class PathCursor extends React.Component {
  constructor (props) {
    super(props)
    const { path, value, animations, ensureLimits, raiseOnChange, path } = props
    this.PathCursor = new BABYLON.PathCursor(path)
    this.PathCursor.path = path
    this.PathCursor.value = value
    this.PathCursor.animations = animations
    this.PathCursor.ensureLimits = ensureLimits
    this.PathCursor.raiseOnChange = raiseOnChange
  }

  render () {
    return null
  }
}

export default PathCursor

