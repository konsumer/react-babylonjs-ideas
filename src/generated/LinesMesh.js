import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class LinesMesh extends React.Component {
  constructor (props) {
    super(props)
    const { useVertexColor, useVertexAlpha, color, alpha, intersectionThreshold, material, checkCollisions, name, scene, parent, source, doNotCloneChildren, useVertexColor, useVertexAlpha } = props
    this.LinesMesh = new BABYLON.LinesMesh(name, scene, parent, source, doNotCloneChildren, useVertexColor, useVertexAlpha)
    this.LinesMesh.useVertexColor = useVertexColor
    this.LinesMesh.useVertexAlpha = useVertexAlpha
    this.LinesMesh.color = color
    this.LinesMesh.alpha = alpha
    this.LinesMesh.intersectionThreshold = intersectionThreshold
    this.LinesMesh.material = material
    this.LinesMesh.checkCollisions = checkCollisions
  }

  render () {
    return null
  }
}

export default withScene(LinesMesh)

