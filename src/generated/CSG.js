import React from 'react'
import BABYLON from 'babylonjs'

class CSG extends React.Component {
  constructor (props) {
    super(props)
    const { polygons, matrix, position, rotation, rotationQuaternion, scaling, FromPolygons } = props
    this.CSG = new BABYLON.CSG()
    this.CSG.polygons = polygons
    this.CSG.matrix = matrix
    this.CSG.position = position
    this.CSG.rotation = rotation
    this.CSG.rotationQuaternion = rotationQuaternion
    this.CSG.scaling = scaling
    this.CSG.FromPolygons = FromPolygons
  }

  render () {
    return null
  }
}

export default CSG

