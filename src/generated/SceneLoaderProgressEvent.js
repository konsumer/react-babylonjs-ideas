import React from 'react'

class SceneLoaderProgressEvent extends React.Component {
  constructor (props) {
    super(props)
    const { lengthComputable, loaded, total } = props
    this.SceneLoaderProgressEvent = new SceneLoaderProgressEvent(lengthComputable, loaded, total)
  }

  render () {
    return null
  }
}

export default SceneLoaderProgressEvent

