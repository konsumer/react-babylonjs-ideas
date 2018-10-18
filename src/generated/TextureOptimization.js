import React from 'react'
import BABYLON from 'babylonjs'

class TextureOptimization extends React.Component {
  constructor (props) {
    super(props)
    const { priority, maximumSize, step, priority, maximumSize, step } = props
    this.TextureOptimization = new BABYLON.TextureOptimization(priority, maximumSize, step)
    this.TextureOptimization.priority = priority
    this.TextureOptimization.maximumSize = maximumSize
    this.TextureOptimization.step = step
  }

  render () {
    return null
  }
}

export default TextureOptimization

