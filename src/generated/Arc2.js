import React from 'react'

class Arc2 extends React.Component {
  constructor (props) {
    super(props)
    const { startPoint, midPoint, endPoint, centerPoint, radius, angle, startAngle, orientation } = props
    this.Arc2 = new Arc2(startPoint, midPoint, endPoint, centerPoint, radius, angle, startAngle, orientation)
  }

  render () {
    return null
  }
}

export default Arc2

