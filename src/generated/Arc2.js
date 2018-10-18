import React from 'react'
import BABYLON from 'babylonjs'

class Arc2 extends React.Component {
  constructor (props) {
    super(props)
    const { startPoint, midPoint, endPoint, centerPoint, radius, angle, startAngle, orientation, startPoint, midPoint, endPoint } = props
    this.Arc2 = new BABYLON.Arc2(startPoint, midPoint, endPoint)
    this.Arc2.startPoint = startPoint
    this.Arc2.midPoint = midPoint
    this.Arc2.endPoint = endPoint
    this.Arc2.centerPoint = centerPoint
    this.Arc2.radius = radius
    this.Arc2.angle = angle
    this.Arc2.startAngle = startAngle
    this.Arc2.orientation = orientation
  }

  render () {
    return null
  }
}

export default Arc2

