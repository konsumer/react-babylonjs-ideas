import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RefractionTexture extends React.Component {
  constructor (props) {
    super(props)
    const { refractionPlane, depth, name, size, scene, generateMipMaps } = props
    this.RefractionTexture = new BABYLON.RefractionTexture(name, size, scene, generateMipMaps)
    this.RefractionTexture.refractionPlane = refractionPlane
    this.RefractionTexture.depth = depth
  }

  render () {
    return null
  }
}

export default withScene(RefractionTexture)

