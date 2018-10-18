import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class PolygonMeshBuilder extends React.Component {
  constructor (props) {
    super(props)
    const { addSide, name, contours, scene } = props
    this.PolygonMeshBuilder = new BABYLON.PolygonMeshBuilder(name, contours, scene)
    this.PolygonMeshBuilder.addSide = addSide
  }

  render () {
    return null
  }
}

export default withScene(PolygonMeshBuilder)

