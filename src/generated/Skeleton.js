import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Skeleton extends React.Component {
  constructor (props) {
    super(props)
    const { name, id, bones, dimensionsAtRest, needInitialSkinMatrix, animations, doNotSerialize, animationPropertiesOverride, onBeforeComputeObservable, name, id, scene } = props
    this.Skeleton = new BABYLON.Skeleton(name, id, scene)
    this.Skeleton.name = name
    this.Skeleton.id = id
    this.Skeleton.bones = bones
    this.Skeleton.dimensionsAtRest = dimensionsAtRest
    this.Skeleton.needInitialSkinMatrix = needInitialSkinMatrix
    this.Skeleton.animations = animations
    this.Skeleton.doNotSerialize = doNotSerialize
    this.Skeleton.animationPropertiesOverride = animationPropertiesOverride
    this.Skeleton.onBeforeComputeObservable = onBeforeComputeObservable
  }

  render () {
    return null
  }
}

export default withScene(Skeleton)

