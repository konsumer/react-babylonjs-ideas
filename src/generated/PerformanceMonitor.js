import React from 'react'
import BABYLON from 'babylonjs'

class PerformanceMonitor extends React.Component {
  constructor (props) {
    super(props)
    const { averageFrameTime, averageFrameTimeVariance, instantaneousFrameTime, averageFPS, instantaneousFPS, isSaturated, isEnabled, frameSampleSize } = props
    this.PerformanceMonitor = new BABYLON.PerformanceMonitor(frameSampleSize)
    this.PerformanceMonitor.averageFrameTime = averageFrameTime
    this.PerformanceMonitor.averageFrameTimeVariance = averageFrameTimeVariance
    this.PerformanceMonitor.instantaneousFrameTime = instantaneousFrameTime
    this.PerformanceMonitor.averageFPS = averageFPS
    this.PerformanceMonitor.instantaneousFPS = instantaneousFPS
    this.PerformanceMonitor.isSaturated = isSaturated
    this.PerformanceMonitor.isEnabled = isEnabled
  }

  render () {
    return null
  }
}

export default PerformanceMonitor

