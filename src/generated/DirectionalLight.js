import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DirectionalLight extends React.Component {
  constructor (props) {
    super(props)
    const { shadowFrustumSize, shadowOrthoScale, autoUpdateExtends, name, direction, scene } = props
    this.DirectionalLight = new BABYLON.DirectionalLight(name, direction, scene)
    this.DirectionalLight.shadowFrustumSize = shadowFrustumSize
    this.DirectionalLight.shadowOrthoScale = shadowOrthoScale
    this.DirectionalLight.autoUpdateExtends = autoUpdateExtends
  }

  render () {
    return null
  }
}

export default withScene(DirectionalLight)

