import React from 'react'
import BABYLON from 'babylonjs'

class WorkerPool extends React.Component {
  constructor (props) {
    super(props)
    const { workers } = props
    this.WorkerPool = new BABYLON.WorkerPool(workers)
    
  }

  render () {
    return null
  }
}

export default WorkerPool

