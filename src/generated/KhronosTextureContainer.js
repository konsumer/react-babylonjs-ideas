import React from 'react'

class KhronosTextureContainer extends React.Component {
  constructor (props) {
    super(props)
    const { arrayBuffer, glType, glTypeSize, glFormat, glInternalFormat, glBaseInternalFormat, pixelWidth, pixelHeight, pixelDepth, numberOfArrayElements, numberOfFaces, numberOfMipmapLevels, bytesOfKeyValueData, loadType } = props
    this.KhronosTextureContainer = new KhronosTextureContainer(arrayBuffer, glType, glTypeSize, glFormat, glInternalFormat, glBaseInternalFormat, pixelWidth, pixelHeight, pixelDepth, numberOfArrayElements, numberOfFaces, numberOfMipmapLevels, bytesOfKeyValueData, loadType)
  }

  render () {
    return null
  }
}

export default KhronosTextureContainer

