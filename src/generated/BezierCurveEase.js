import React from 'react'

class BezierCurveEase extends React.Component {
  constructor (props) {
    super(props)
    const { x1, y1, x2, y2 } = props
    this.BezierCurveEase = new BezierCurveEase(x1, y1, x2, y2)
  }

  render () {
    return null
  }
}

export default BezierCurveEase

