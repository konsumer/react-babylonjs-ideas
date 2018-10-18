import React from 'react'

class AbstractAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, onSuccess, onError, isCompleted, taskState, errorObject, onErrorCallback, onDoneCallback } = props
    this.AbstractAssetTask = new AbstractAssetTask(name, onSuccess, onError, isCompleted, taskState, errorObject, onErrorCallback, onDoneCallback)
  }

  render () {
    return null
  }
}

export default AbstractAssetTask

