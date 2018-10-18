import React from 'react'
import BABYLON from 'babylonjs'

class DracoCompression extends React.Component {
  constructor (props) {
    super(props)
    const { Configuration, DecoderAvailable } = props
    this.DracoCompression = new BABYLON.DracoCompression()
    this.DracoCompression.Configuration = Configuration
    this.DracoCompression.DecoderAvailable = DecoderAvailable
  }

  render () {
    return null
  }
}

export default DracoCompression

