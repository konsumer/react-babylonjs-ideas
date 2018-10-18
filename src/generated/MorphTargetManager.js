import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class MorphTargetManager extends React.Component {
  constructor (props) {
    super(props)
    const { uniqueId, vertexCount, supportsNormals, supportsTangents, numTargets, numInfluencers, influences, scene } = props
    this.MorphTargetManager = new BABYLON.MorphTargetManager(scene)
    this.MorphTargetManager.uniqueId = uniqueId
    this.MorphTargetManager.vertexCount = vertexCount
    this.MorphTargetManager.supportsNormals = supportsNormals
    this.MorphTargetManager.supportsTangents = supportsTangents
    this.MorphTargetManager.numTargets = numTargets
    this.MorphTargetManager.numInfluencers = numInfluencers
    this.MorphTargetManager.influences = influences
  }

  render () {
    return null
  }
}

export default withScene(MorphTargetManager)

