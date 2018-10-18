import React from 'react'
import BABYLON from 'babylonjs'

class AbstractAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, onSuccess, onError, isCompleted, taskState, errorObject, onErrorCallback, onDoneCallback, name } = props
    this.AbstractAssetTask = new BABYLON.AbstractAssetTask(name)
    this.AbstractAssetTask.name = name
    this.AbstractAssetTask.onSuccess = onSuccess
    this.AbstractAssetTask.onError = onError
    this.AbstractAssetTask.isCompleted = isCompleted
    this.AbstractAssetTask.taskState = taskState
    this.AbstractAssetTask.errorObject = errorObject
    this.AbstractAssetTask.onErrorCallback = onErrorCallback
    this.AbstractAssetTask.onDoneCallback = onDoneCallback
  }

  render () {
    return null
  }
}

export default AbstractAssetTask

