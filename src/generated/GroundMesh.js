import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class GroundMesh extends React.Component {
  constructor (props) {
    super(props)
    const { generateOctree, subdivisions, subdivisionsX, subdivisionsY, name, scene } = props
    this.GroundMesh = new BABYLON.GroundMesh(name, scene)
    this.GroundMesh.generateOctree = generateOctree
    this.GroundMesh.subdivisions = subdivisions
    this.GroundMesh.subdivisionsX = subdivisionsX
    this.GroundMesh.subdivisionsY = subdivisionsY
  }

  render () {
    return null
  }
}

export default withScene(GroundMesh)

