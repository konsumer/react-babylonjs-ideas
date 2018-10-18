import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DepthRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { useOnlyInActiveCamera, scene, type, camera } = props
    this.DepthRenderer = new BABYLON.DepthRenderer(scene, type, camera)
    this.DepthRenderer.useOnlyInActiveCamera = useOnlyInActiveCamera
  }

  render () {
    return null
  }
}

export default withScene(DepthRenderer)

