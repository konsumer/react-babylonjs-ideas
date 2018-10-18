import React from 'react'
import BABYLON from 'babylonjs'

class SceneLoaderProgressEvent extends React.Component {
  constructor (props) {
    super(props)
    const { lengthComputable, loaded, total, lengthComputable, loaded, total } = props
    this.SceneLoaderProgressEvent = new BABYLON.SceneLoaderProgressEvent(lengthComputable, loaded, total)
    this.SceneLoaderProgressEvent.lengthComputable = lengthComputable
    this.SceneLoaderProgressEvent.loaded = loaded
    this.SceneLoaderProgressEvent.total = total
  }

  render () {
    return null
  }
}

export default SceneLoaderProgressEvent

