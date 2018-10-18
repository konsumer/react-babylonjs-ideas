import React from 'react'
import BABYLON from 'babylonjs'

class PerfCounter extends React.Component {
  constructor (props) {
    super(props)
    const { Enabled, min, max, average, lastSecAverage, current, total, count } = props
    this.PerfCounter = new BABYLON.PerfCounter()
    this.PerfCounter.Enabled = Enabled
    this.PerfCounter.min = min
    this.PerfCounter.max = max
    this.PerfCounter.average = average
    this.PerfCounter.lastSecAverage = lastSecAverage
    this.PerfCounter.current = current
    this.PerfCounter.total = total
    this.PerfCounter.count = count
  }

  render () {
    return null
  }
}

export default PerfCounter

