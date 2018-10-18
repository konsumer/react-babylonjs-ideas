import React from 'react'

class Texture extends React.Component {
  constructor (props) {
    super(props)
    const { url, uOffset, vOffset, uScale, vScale, uAng, vAng, wAng, uRotationCenter, vRotationCenter, wRotationCenter, noMipmap, onLoadObservable, isBlocking, samplingMode } = props
    this.Texture = new Texture(url, uOffset, vOffset, uScale, vScale, uAng, vAng, wAng, uRotationCenter, vRotationCenter, wRotationCenter, noMipmap, onLoadObservable, isBlocking, samplingMode)
  }

  render () {
    return null
  }
}

export default Texture

