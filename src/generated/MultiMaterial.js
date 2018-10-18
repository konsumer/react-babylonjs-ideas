import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class MultiMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { subMaterials, name, scene } = props
    this.MultiMaterial = new BABYLON.MultiMaterial(name, scene)
    this.MultiMaterial.subMaterials = subMaterials
  }

  render () {
    return null
  }
}

export default withScene(MultiMaterial)

