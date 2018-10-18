import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Geometry extends React.Component {
  constructor (props) {
    super(props)
    const { id, delayLoadState, delayLoadingFile, onGeometryUpdated, boundingBias, extend, doNotSerialize, notifyUpdate, toNumberArray, id, scene, vertexData, updatable, mesh } = props
    this.Geometry = new BABYLON.Geometry(id, scene, vertexData, updatable, mesh)
    this.Geometry.id = id
    this.Geometry.delayLoadState = delayLoadState
    this.Geometry.delayLoadingFile = delayLoadingFile
    this.Geometry.onGeometryUpdated = onGeometryUpdated
    this.Geometry.boundingBias = boundingBias
    this.Geometry.extend = extend
    this.Geometry.doNotSerialize = doNotSerialize
    this.Geometry.notifyUpdate = notifyUpdate
    this.Geometry.toNumberArray = toNumberArray
  }

  render () {
    return null
  }
}

export default withScene(Geometry)

