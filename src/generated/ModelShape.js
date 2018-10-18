import React from 'react'
import BABYLON from 'babylonjs'

class ModelShape extends React.Component {
  constructor (props) {
    super(props)
    const { shapeID, id, shape, indicesLength, shapeUV, posFunction, vtxFunction } = props
    this.ModelShape = new BABYLON.ModelShape(id, shape, indicesLength, shapeUV, posFunction, vtxFunction)
    this.ModelShape.shapeID = shapeID
  }

  render () {
    return null
  }
}

export default ModelShape

