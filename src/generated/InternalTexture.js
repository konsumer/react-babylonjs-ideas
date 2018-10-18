import React from 'react'

class InternalTexture extends React.Component {
  constructor (props) {
    super(props)
    const { isReady, isCube, is3D, url, samplingMode, generateMipMaps, samples, type, format, onLoadedObservable, width, height, depth, baseWidth, baseHeight, baseDepth, invertY, previous, next, dataSource } = props
    this.InternalTexture = new InternalTexture(isReady, isCube, is3D, url, samplingMode, generateMipMaps, samples, type, format, onLoadedObservable, width, height, depth, baseWidth, baseHeight, baseDepth, invertY, previous, next, dataSource)
  }

  render () {
    return null
  }
}

export default InternalTexture

