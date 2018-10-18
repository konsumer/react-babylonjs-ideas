import React from 'react'
import BABYLON from 'babylonjs'

class KhronosTextureContainer extends React.Component {
  constructor (props) {
    super(props)
    const { arrayBuffer, HEADER_LEN, COMPRESSED_2D, COMPRESSED_3D, TEX_2D, TEX_3D, glType, glTypeSize, glFormat, glInternalFormat, glBaseInternalFormat, pixelWidth, pixelHeight, pixelDepth, numberOfArrayElements, numberOfFaces, numberOfMipmapLevels, bytesOfKeyValueData, loadType, arrayBuffer, facesExpected, threeDExpected, textureArrayExpected } = props
    this.KhronosTextureContainer = new BABYLON.KhronosTextureContainer(arrayBuffer, facesExpected, threeDExpected, textureArrayExpected)
    this.KhronosTextureContainer.arrayBuffer = arrayBuffer
    this.KhronosTextureContainer.HEADER_LEN = HEADER_LEN
    this.KhronosTextureContainer.COMPRESSED_2D = COMPRESSED_2D
    this.KhronosTextureContainer.COMPRESSED_3D = COMPRESSED_3D
    this.KhronosTextureContainer.TEX_2D = TEX_2D
    this.KhronosTextureContainer.TEX_3D = TEX_3D
    this.KhronosTextureContainer.glType = glType
    this.KhronosTextureContainer.glTypeSize = glTypeSize
    this.KhronosTextureContainer.glFormat = glFormat
    this.KhronosTextureContainer.glInternalFormat = glInternalFormat
    this.KhronosTextureContainer.glBaseInternalFormat = glBaseInternalFormat
    this.KhronosTextureContainer.pixelWidth = pixelWidth
    this.KhronosTextureContainer.pixelHeight = pixelHeight
    this.KhronosTextureContainer.pixelDepth = pixelDepth
    this.KhronosTextureContainer.numberOfArrayElements = numberOfArrayElements
    this.KhronosTextureContainer.numberOfFaces = numberOfFaces
    this.KhronosTextureContainer.numberOfMipmapLevels = numberOfMipmapLevels
    this.KhronosTextureContainer.bytesOfKeyValueData = bytesOfKeyValueData
    this.KhronosTextureContainer.loadType = loadType
  }

  render () {
    return null
  }
}

export default KhronosTextureContainer

