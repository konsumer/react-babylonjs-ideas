import React from 'react'

class PerformanceMonitor extends React.Component {
  constructor (props) {
    super(props)
    const { averageFrameTime, averageFrameTimeVariance, instantaneousFrameTime, averageFPS, instantaneousFPS, isSaturated, isEnabled } = props
    this.PerformanceMonitor = new PerformanceMonitor(averageFrameTime, averageFrameTimeVariance, instantaneousFrameTime, averageFPS, instantaneousFPS, isSaturated, isEnabled)
  }

  render () {
    return null
  }
}

export default PerformanceMonitor

