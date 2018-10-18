import React from 'react'
import BABYLON from 'babylonjs'

class AssetsProgressEvent extends React.Component {
  constructor (props) {
    super(props)
    const { remainingCount, totalCount, task, remainingCount, totalCount, task } = props
    this.AssetsProgressEvent = new BABYLON.AssetsProgressEvent(remainingCount, totalCount, task)
    this.AssetsProgressEvent.remainingCount = remainingCount
    this.AssetsProgressEvent.totalCount = totalCount
    this.AssetsProgressEvent.task = task
  }

  render () {
    return null
  }
}

export default AssetsProgressEvent

