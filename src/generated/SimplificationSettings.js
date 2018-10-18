import React from 'react'
import BABYLON from 'babylonjs'

class SimplificationSettings extends React.Component {
  constructor (props) {
    super(props)
    const { quality, distance, optimizeMesh, quality, distance, optimizeMesh } = props
    this.SimplificationSettings = new BABYLON.SimplificationSettings(quality, distance, optimizeMesh)
    this.SimplificationSettings.quality = quality
    this.SimplificationSettings.distance = distance
    this.SimplificationSettings.optimizeMesh = optimizeMesh
  }

  render () {
    return null
  }
}

export default SimplificationSettings

