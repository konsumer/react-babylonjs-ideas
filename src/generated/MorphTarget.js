import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class MorphTarget extends React.Component {
  constructor (props) {
    super(props)
    const { name, animations, onInfluenceChanged, influence, animationPropertiesOverride, hasPositions, hasNormals, hasTangents, name, influence, scene } = props
    this.MorphTarget = new BABYLON.MorphTarget(name, influence, scene)
    this.MorphTarget.name = name
    this.MorphTarget.animations = animations
    this.MorphTarget.onInfluenceChanged = onInfluenceChanged
    this.MorphTarget.influence = influence
    this.MorphTarget.animationPropertiesOverride = animationPropertiesOverride
    this.MorphTarget.hasPositions = hasPositions
    this.MorphTarget.hasNormals = hasNormals
    this.MorphTarget.hasTangents = hasTangents
  }

  render () {
    return null
  }
}

export default withScene(MorphTarget)

