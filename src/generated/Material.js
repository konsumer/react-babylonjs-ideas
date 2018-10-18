import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Material extends React.Component {
  constructor (props) {
    super(props)
    const { TriangleFillMode, WireFrameFillMode, PointFillMode, PointListDrawMode, LineListDrawMode, LineLoopDrawMode, LineStripDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, ClockWiseSideOrientation, CounterClockWiseSideOrientation, TextureDirtyFlag, LightDirtyFlag, FresnelDirtyFlag, AttributesDirtyFlag, MiscDirtyFlag, AllDirtyFlag, id, uniqueId, name, checkReadyOnEveryCall, checkReadyOnlyOnce, state, alpha, backFaceCulling, sideOrientation, onCompiled, onError, getRenderTargetTextures, hasRenderTargetTextures, doNotSerialize, storeEffectOnSubMeshes, animations, onDisposeObservable, onDispose, onBindObservable, onBind, onUnBindObservable, alphaMode, needDepthPrePass, disableDepthWrite, forceDepthWrite, separateCullingPass, fogEnabled, pointSize, zOffset, wireframe, pointsCloud, fillMode, isFrozen, name, scene, doNotAdd } = props
    this.Material = new BABYLON.Material(name, scene, doNotAdd)
    this.Material.TriangleFillMode = TriangleFillMode
    this.Material.WireFrameFillMode = WireFrameFillMode
    this.Material.PointFillMode = PointFillMode
    this.Material.PointListDrawMode = PointListDrawMode
    this.Material.LineListDrawMode = LineListDrawMode
    this.Material.LineLoopDrawMode = LineLoopDrawMode
    this.Material.LineStripDrawMode = LineStripDrawMode
    this.Material.TriangleStripDrawMode = TriangleStripDrawMode
    this.Material.TriangleFanDrawMode = TriangleFanDrawMode
    this.Material.ClockWiseSideOrientation = ClockWiseSideOrientation
    this.Material.CounterClockWiseSideOrientation = CounterClockWiseSideOrientation
    this.Material.TextureDirtyFlag = TextureDirtyFlag
    this.Material.LightDirtyFlag = LightDirtyFlag
    this.Material.FresnelDirtyFlag = FresnelDirtyFlag
    this.Material.AttributesDirtyFlag = AttributesDirtyFlag
    this.Material.MiscDirtyFlag = MiscDirtyFlag
    this.Material.AllDirtyFlag = AllDirtyFlag
    this.Material.id = id
    this.Material.uniqueId = uniqueId
    this.Material.name = name
    this.Material.checkReadyOnEveryCall = checkReadyOnEveryCall
    this.Material.checkReadyOnlyOnce = checkReadyOnlyOnce
    this.Material.state = state
    this.Material.alpha = alpha
    this.Material.backFaceCulling = backFaceCulling
    this.Material.sideOrientation = sideOrientation
    this.Material.onCompiled = onCompiled
    this.Material.onError = onError
    this.Material.getRenderTargetTextures = getRenderTargetTextures
    this.Material.hasRenderTargetTextures = hasRenderTargetTextures
    this.Material.doNotSerialize = doNotSerialize
    this.Material.storeEffectOnSubMeshes = storeEffectOnSubMeshes
    this.Material.animations = animations
    this.Material.onDisposeObservable = onDisposeObservable
    this.Material.onDispose = onDispose
    this.Material.onBindObservable = onBindObservable
    this.Material.onBind = onBind
    this.Material.onUnBindObservable = onUnBindObservable
    this.Material.alphaMode = alphaMode
    this.Material.needDepthPrePass = needDepthPrePass
    this.Material.disableDepthWrite = disableDepthWrite
    this.Material.forceDepthWrite = forceDepthWrite
    this.Material.separateCullingPass = separateCullingPass
    this.Material.fogEnabled = fogEnabled
    this.Material.pointSize = pointSize
    this.Material.zOffset = zOffset
    this.Material.wireframe = wireframe
    this.Material.pointsCloud = pointsCloud
    this.Material.fillMode = fillMode
    this.Material.isFrozen = isFrozen
  }

  render () {
    return null
  }
}

export default withScene(Material)

