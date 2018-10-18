import React from 'react'
import BABYLON from 'babylonjs'

class BezierCurveEase extends React.Component {
  constructor (props) {
    super(props)
    const { x1, y1, x2, y2, x1, y1, x2, y2 } = props
    this.BezierCurveEase = new BABYLON.BezierCurveEase(x1, y1, x2, y2)
    this.BezierCurveEase.x1 = x1
    this.BezierCurveEase.y1 = y1
    this.BezierCurveEase.x2 = x2
    this.BezierCurveEase.y2 = y2
  }

  render () {
    return null
  }
}

export default BezierCurveEase

