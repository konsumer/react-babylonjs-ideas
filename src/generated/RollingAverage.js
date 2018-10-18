import React from 'react'

class RollingAverage extends React.Component {
  constructor (props) {
    super(props)
    const { average, variance } = props
    this.RollingAverage = new RollingAverage(average, variance)
  }

  render () {
    return null
  }
}

export default RollingAverage

