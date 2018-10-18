import React from 'react'
import BABYLON from 'babylonjs'

class HardwareScalingOptimization extends React.Component {
  constructor (props) {
    super(props)
    const { priority, maximumScale, step, priority, maximumScale, step } = props
    this.HardwareScalingOptimization = new BABYLON.HardwareScalingOptimization(priority, maximumScale, step)
    this.HardwareScalingOptimization.priority = priority
    this.HardwareScalingOptimization.maximumScale = maximumScale
    this.HardwareScalingOptimization.step = step
  }

  render () {
    return null
  }
}

export default HardwareScalingOptimization

