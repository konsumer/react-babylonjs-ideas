import React from 'react'

class FilesInput extends React.Component {
  constructor (props) {
    super(props)
    const { onProcessFileCallback, renderFunction, drag, drop } = props
    this.FilesInput = new FilesInput(onProcessFileCallback, renderFunction, drag, drop)
  }

  render () {
    return null
  }
}

export default FilesInput

