import React from 'react'
import BABYLON from 'babylonjs'

class RollingAverage extends React.Component {
  constructor (props) {
    super(props)
    const { average, variance, length } = props
    this.RollingAverage = new BABYLON.RollingAverage(length)
    this.RollingAverage.average = average
    this.RollingAverage.variance = variance
  }

  render () {
    return null
  }
}

export default RollingAverage

