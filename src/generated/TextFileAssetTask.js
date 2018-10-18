import React from 'react'

class TextFileAssetTask extends React.Component {
  constructor (props) {
    super(props)
    const { name, url, text, onSuccess, onError } = props
    this.TextFileAssetTask = new TextFileAssetTask(name, url, text, onSuccess, onError)
  }

  render () {
    return null
  }
}

export default TextFileAssetTask

