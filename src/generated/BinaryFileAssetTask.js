import React from 'react'

class BinaryFileAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, data, onSuccess, onError } = props
    this.BinaryFileAssetTask = new BinaryFileAssetTask(name, url, data, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default BinaryFileAssetTask

