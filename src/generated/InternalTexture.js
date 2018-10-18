import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class InternalTexture extends React.Component {
  constructor (props) {
    super(props)
    const { DATASOURCE_UNKNOWN, DATASOURCE_URL, DATASOURCE_TEMP, DATASOURCE_RAW, DATASOURCE_DYNAMIC, DATASOURCE_RENDERTARGET, DATASOURCE_MULTIRENDERTARGET, DATASOURCE_CUBE, DATASOURCE_CUBERAW, DATASOURCE_CUBEPREFILTERED, DATASOURCE_RAW3D, DATASOURCE_DEPTHTEXTURE, DATASOURCE_CUBERAW_RGBD, isReady, isCube, is3D, url, samplingMode, generateMipMaps, samples, type, format, onLoadedObservable, width, height, depth, baseWidth, baseHeight, baseDepth, invertY, previous, next, dataSource, engine, dataSource } = props
    this.InternalTexture = new BABYLON.InternalTexture(engine, dataSource)
    this.InternalTexture.DATASOURCE_UNKNOWN = DATASOURCE_UNKNOWN
    this.InternalTexture.DATASOURCE_URL = DATASOURCE_URL
    this.InternalTexture.DATASOURCE_TEMP = DATASOURCE_TEMP
    this.InternalTexture.DATASOURCE_RAW = DATASOURCE_RAW
    this.InternalTexture.DATASOURCE_DYNAMIC = DATASOURCE_DYNAMIC
    this.InternalTexture.DATASOURCE_RENDERTARGET = DATASOURCE_RENDERTARGET
    this.InternalTexture.DATASOURCE_MULTIRENDERTARGET = DATASOURCE_MULTIRENDERTARGET
    this.InternalTexture.DATASOURCE_CUBE = DATASOURCE_CUBE
    this.InternalTexture.DATASOURCE_CUBERAW = DATASOURCE_CUBERAW
    this.InternalTexture.DATASOURCE_CUBEPREFILTERED = DATASOURCE_CUBEPREFILTERED
    this.InternalTexture.DATASOURCE_RAW3D = DATASOURCE_RAW3D
    this.InternalTexture.DATASOURCE_DEPTHTEXTURE = DATASOURCE_DEPTHTEXTURE
    this.InternalTexture.DATASOURCE_CUBERAW_RGBD = DATASOURCE_CUBERAW_RGBD
    this.InternalTexture.isReady = isReady
    this.InternalTexture.isCube = isCube
    this.InternalTexture.is3D = is3D
    this.InternalTexture.url = url
    this.InternalTexture.samplingMode = samplingMode
    this.InternalTexture.generateMipMaps = generateMipMaps
    this.InternalTexture.samples = samples
    this.InternalTexture.type = type
    this.InternalTexture.format = format
    this.InternalTexture.onLoadedObservable = onLoadedObservable
    this.InternalTexture.width = width
    this.InternalTexture.height = height
    this.InternalTexture.depth = depth
    this.InternalTexture.baseWidth = baseWidth
    this.InternalTexture.baseHeight = baseHeight
    this.InternalTexture.baseDepth = baseDepth
    this.InternalTexture.invertY = invertY
    this.InternalTexture.previous = previous
    this.InternalTexture.next = next
    this.InternalTexture.dataSource = dataSource
  }

  render () {
    return null
  }
}

export default withEngine(InternalTexture)

