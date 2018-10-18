import React from 'react'

class SimplificationQueue extends React.Component {
  constructor (props) {
    super(props)
    const { running, getSimplifier } = props
    this.SimplificationQueue = new SimplificationQueue(running, getSimplifier)
  }

  render () {
    return null
  }
}

export default SimplificationQueue

