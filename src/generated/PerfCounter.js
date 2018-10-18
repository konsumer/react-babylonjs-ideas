import React from 'react'

class PerfCounter extends React.Component {
  constructor (props) {
    super(props)
    const { min, max, average, lastSecAverage, current, total, count } = props
    this.PerfCounter = new PerfCounter(min, max, average, lastSecAverage, current, total, count)
  }

  render () {
    return null
  }
}

export default PerfCounter

