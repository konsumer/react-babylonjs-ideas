import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class ShaderMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { name, scene, shaderPath, options } = props
    this.ShaderMaterial = new BABYLON.ShaderMaterial(name, scene, shaderPath, options)
    
  }

  render () {
    return null
  }
}

export default withScene(ShaderMaterial)

