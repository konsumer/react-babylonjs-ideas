import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Mesh extends React.Component {
  constructor (props) {
    super(props)
    const { FRONTSIDE, BACKSIDE, DOUBLESIDE, DEFAULTSIDE, NO_CAP, CAP_START, CAP_END, CAP_ALL, onBeforeRenderObservable, onAfterRenderObservable, onBeforeDrawObservable, onBeforeDraw, delayLoadState, instances, delayLoadingFile, onLODLevelSelection, morphTargetManager, overrideMaterialSideOrientation, source, isUnIndexed, hasLODLevels, geometry, isBlocked, areNormalsFrozen, overridenInstanceCount, normalizeSkinFourWeights, normalizeSkinWeightsAndExtra, name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor } = props
    this.Mesh = new BABYLON.Mesh(name, scene, parent, source, doNotCloneChildren, clonePhysicsImpostor)
    this.Mesh.FRONTSIDE = FRONTSIDE
    this.Mesh.BACKSIDE = BACKSIDE
    this.Mesh.DOUBLESIDE = DOUBLESIDE
    this.Mesh.DEFAULTSIDE = DEFAULTSIDE
    this.Mesh.NO_CAP = NO_CAP
    this.Mesh.CAP_START = CAP_START
    this.Mesh.CAP_END = CAP_END
    this.Mesh.CAP_ALL = CAP_ALL
    this.Mesh.onBeforeRenderObservable = onBeforeRenderObservable
    this.Mesh.onAfterRenderObservable = onAfterRenderObservable
    this.Mesh.onBeforeDrawObservable = onBeforeDrawObservable
    this.Mesh.onBeforeDraw = onBeforeDraw
    this.Mesh.delayLoadState = delayLoadState
    this.Mesh.instances = instances
    this.Mesh.delayLoadingFile = delayLoadingFile
    this.Mesh.onLODLevelSelection = onLODLevelSelection
    this.Mesh.morphTargetManager = morphTargetManager
    this.Mesh.overrideMaterialSideOrientation = overrideMaterialSideOrientation
    this.Mesh.source = source
    this.Mesh.isUnIndexed = isUnIndexed
    this.Mesh.hasLODLevels = hasLODLevels
    this.Mesh.geometry = geometry
    this.Mesh.isBlocked = isBlocked
    this.Mesh.areNormalsFrozen = areNormalsFrozen
    this.Mesh.overridenInstanceCount = overridenInstanceCount
    this.Mesh.normalizeSkinFourWeights = normalizeSkinFourWeights
    this.Mesh.normalizeSkinWeightsAndExtra = normalizeSkinWeightsAndExtra
  }

  render () {
    return null
  }
}

export default withScene(Mesh)

