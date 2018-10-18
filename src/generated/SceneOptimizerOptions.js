import React from 'react'
import BABYLON from 'babylonjs'

class SceneOptimizerOptions extends React.Component {
  constructor (props) {
    super(props)
    const { targetFrameRate, trackerDuration, optimizations, targetFrameRate, trackerDuration } = props
    this.SceneOptimizerOptions = new BABYLON.SceneOptimizerOptions(targetFrameRate, trackerDuration)
    this.SceneOptimizerOptions.targetFrameRate = targetFrameRate
    this.SceneOptimizerOptions.trackerDuration = trackerDuration
    this.SceneOptimizerOptions.optimizations = optimizations
  }

  render () {
    return null
  }
}

export default SceneOptimizerOptions

