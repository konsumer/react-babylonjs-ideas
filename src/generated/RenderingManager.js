import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RenderingManager extends React.Component {
  constructor (props) {
    super(props)
    const { MAX_RENDERINGGROUPS, MIN_RENDERINGGROUPS, AUTOCLEAR, scene } = props
    this.RenderingManager = new BABYLON.RenderingManager(scene)
    this.RenderingManager.MAX_RENDERINGGROUPS = MAX_RENDERINGGROUPS
    this.RenderingManager.MIN_RENDERINGGROUPS = MIN_RENDERINGGROUPS
    this.RenderingManager.AUTOCLEAR = AUTOCLEAR
  }

  render () {
    return null
  }
}

export default withScene(RenderingManager)

