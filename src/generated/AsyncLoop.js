import React from 'react'
import BABYLON from 'babylonjs'

class AsyncLoop extends React.Component {
  constructor (props) {
    super(props)
    const { iterations, index, iterations, func, successCallback, offset } = props
    this.AsyncLoop = new BABYLON.AsyncLoop(iterations, func, successCallback, offset)
    this.AsyncLoop.iterations = iterations
    this.AsyncLoop.index = index
  }

  render () {
    return null
  }
}

export default AsyncLoop

