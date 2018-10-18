import React from 'react'
import BABYLON from 'babylonjs'

class SceneOptimization extends React.Component {
  constructor (props) {
    super(props)
    const { priority, priority } = props
    this.SceneOptimization = new BABYLON.SceneOptimization(priority)
    this.SceneOptimization.priority = priority
  }

  render () {
    return null
  }
}

export default SceneOptimization

