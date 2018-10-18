import React from 'react'
import BABYLON from 'babylonjs'

class DDSTools extends React.Component {
  constructor (props) {
    super(props)
    const { StoreLODInAlphaChannel } = props
    this.DDSTools = new BABYLON.DDSTools()
    this.DDSTools.StoreLODInAlphaChannel = StoreLODInAlphaChannel
  }

  render () {
    return null
  }
}

export default DDSTools

