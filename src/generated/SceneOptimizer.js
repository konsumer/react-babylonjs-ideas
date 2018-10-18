import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class SceneOptimizer extends React.Component {
  constructor (props) {
    super(props)
    const { onSuccessObservable, onNewOptimizationAppliedObservable, onFailureObservable, isInImprovementMode, currentPriorityLevel, currentFrameRate, targetFrameRate, trackerDuration, optimizations, scene, options, autoGeneratePriorities, improvementMode } = props
    this.SceneOptimizer = new BABYLON.SceneOptimizer(scene, options, autoGeneratePriorities, improvementMode)
    this.SceneOptimizer.onSuccessObservable = onSuccessObservable
    this.SceneOptimizer.onNewOptimizationAppliedObservable = onNewOptimizationAppliedObservable
    this.SceneOptimizer.onFailureObservable = onFailureObservable
    this.SceneOptimizer.isInImprovementMode = isInImprovementMode
    this.SceneOptimizer.currentPriorityLevel = currentPriorityLevel
    this.SceneOptimizer.currentFrameRate = currentFrameRate
    this.SceneOptimizer.targetFrameRate = targetFrameRate
    this.SceneOptimizer.trackerDuration = trackerDuration
    this.SceneOptimizer.optimizations = optimizations
  }

  render () {
    return null
  }
}

export default withScene(SceneOptimizer)

