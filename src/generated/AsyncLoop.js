import React from 'react'

class AsyncLoop extends React.Component {
  constructor (props) {
    super(props)
    const { iterations, index } = props
    this.AsyncLoop = new AsyncLoop(iterations, index)
  }

  render () {
    return null
  }
}

export default AsyncLoop

