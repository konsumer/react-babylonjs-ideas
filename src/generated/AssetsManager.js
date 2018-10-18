import React from 'react'

class AssetsManager extends React.Component {
  constructor (props) {
    super(props)
    const { onFinish, onTaskSuccess, onTaskError, onProgress, onTaskSuccessObservable, onTaskErrorObservable, onTasksDoneObservable, onProgressObservable, useDefaultLoadingScreen } = props
    this.AssetsManager = new AssetsManager(onFinish, onTaskSuccess, onTaskError, onProgress, onTaskSuccessObservable, onTaskErrorObservable, onTasksDoneObservable, onProgressObservable, useDefaultLoadingScreen)
  }

  render () {
    return null
  }
}

export default AssetsManager

