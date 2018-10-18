import React from 'react'

class SceneOptimizer extends React.Component {
  constructor (props) {
    super(props)
    const { onSuccessObservable, onNewOptimizationAppliedObservable, onFailureObservable, isInImprovementMode, currentPriorityLevel, currentFrameRate, targetFrameRate, trackerDuration, optimizations } = props
    this.SceneOptimizer = new SceneOptimizer(onSuccessObservable, onNewOptimizationAppliedObservable, onFailureObservable, isInImprovementMode, currentPriorityLevel, currentFrameRate, targetFrameRate, trackerDuration, optimizations)
  }

  render () {
    return null
  }
}

export default SceneOptimizer

