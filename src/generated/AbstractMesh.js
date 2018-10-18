import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AbstractMesh extends React.Component {
  constructor (props) {
    super(props)
    const { OCCLUSION_TYPE_NONE, OCCLUSION_TYPE_OPTIMISTIC, OCCLUSION_TYPE_STRICT, OCCLUSION_ALGORITHM_TYPE_ACCURATE, OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE, CULLINGSTRATEGY_STANDARD, CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, BILLBOARDMODE_NONE, BILLBOARDMODE_X, BILLBOARDMODE_Y, BILLBOARDMODE_Z, BILLBOARDMODE_ALL, cullingStrategy, facetNb, partitioningSubdivisions, partitioningBBoxRatio, mustDepthSortFacets, facetDepthSortFrom, isFacetDataEnabled, onCollideObservable, onCollide, onCollisionPositionChangeObservable, onCollisionPositionChange, onMaterialChangedObservable, definedFacingForward, visibility, alphaIndex, isVisible, isPickable, showSubMeshesBoundingBox, isBlocker, enablePointerMoveEvents, renderingGroupId, material, receiveShadows, outlineColor, outlineWidth, overlayColor, overlayAlpha, hasVertexAlpha, useVertexColors, computeBonesUsingShaders, numBoneInfluencers, applyFog, useOctreeForRenderingSelection, useOctreeForPicking, useOctreeForCollisions, layerMask, alwaysSelectAsActiveMesh, actionManager, ellipsoid, ellipsoidOffset, collisionMask, collisionGroup, edgesWidth, edgesColor, subMeshes, skeleton, onRebuildObservable, scaling, isBlocked, useBones, checkCollisions, collider, name, scene } = props
    this.AbstractMesh = new BABYLON.AbstractMesh(name, scene)
    this.AbstractMesh.OCCLUSION_TYPE_NONE = OCCLUSION_TYPE_NONE
    this.AbstractMesh.OCCLUSION_TYPE_OPTIMISTIC = OCCLUSION_TYPE_OPTIMISTIC
    this.AbstractMesh.OCCLUSION_TYPE_STRICT = OCCLUSION_TYPE_STRICT
    this.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE = OCCLUSION_ALGORITHM_TYPE_ACCURATE
    this.AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE
    this.AbstractMesh.CULLINGSTRATEGY_STANDARD = CULLINGSTRATEGY_STANDARD
    this.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
    this.AbstractMesh.BILLBOARDMODE_NONE = BILLBOARDMODE_NONE
    this.AbstractMesh.BILLBOARDMODE_X = BILLBOARDMODE_X
    this.AbstractMesh.BILLBOARDMODE_Y = BILLBOARDMODE_Y
    this.AbstractMesh.BILLBOARDMODE_Z = BILLBOARDMODE_Z
    this.AbstractMesh.BILLBOARDMODE_ALL = BILLBOARDMODE_ALL
    this.AbstractMesh.cullingStrategy = cullingStrategy
    this.AbstractMesh.facetNb = facetNb
    this.AbstractMesh.partitioningSubdivisions = partitioningSubdivisions
    this.AbstractMesh.partitioningBBoxRatio = partitioningBBoxRatio
    this.AbstractMesh.mustDepthSortFacets = mustDepthSortFacets
    this.AbstractMesh.facetDepthSortFrom = facetDepthSortFrom
    this.AbstractMesh.isFacetDataEnabled = isFacetDataEnabled
    this.AbstractMesh.onCollideObservable = onCollideObservable
    this.AbstractMesh.onCollide = onCollide
    this.AbstractMesh.onCollisionPositionChangeObservable = onCollisionPositionChangeObservable
    this.AbstractMesh.onCollisionPositionChange = onCollisionPositionChange
    this.AbstractMesh.onMaterialChangedObservable = onMaterialChangedObservable
    this.AbstractMesh.definedFacingForward = definedFacingForward
    this.AbstractMesh.visibility = visibility
    this.AbstractMesh.alphaIndex = alphaIndex
    this.AbstractMesh.isVisible = isVisible
    this.AbstractMesh.isPickable = isPickable
    this.AbstractMesh.showSubMeshesBoundingBox = showSubMeshesBoundingBox
    this.AbstractMesh.isBlocker = isBlocker
    this.AbstractMesh.enablePointerMoveEvents = enablePointerMoveEvents
    this.AbstractMesh.renderingGroupId = renderingGroupId
    this.AbstractMesh.material = material
    this.AbstractMesh.receiveShadows = receiveShadows
    this.AbstractMesh.outlineColor = outlineColor
    this.AbstractMesh.outlineWidth = outlineWidth
    this.AbstractMesh.overlayColor = overlayColor
    this.AbstractMesh.overlayAlpha = overlayAlpha
    this.AbstractMesh.hasVertexAlpha = hasVertexAlpha
    this.AbstractMesh.useVertexColors = useVertexColors
    this.AbstractMesh.computeBonesUsingShaders = computeBonesUsingShaders
    this.AbstractMesh.numBoneInfluencers = numBoneInfluencers
    this.AbstractMesh.applyFog = applyFog
    this.AbstractMesh.useOctreeForRenderingSelection = useOctreeForRenderingSelection
    this.AbstractMesh.useOctreeForPicking = useOctreeForPicking
    this.AbstractMesh.useOctreeForCollisions = useOctreeForCollisions
    this.AbstractMesh.layerMask = layerMask
    this.AbstractMesh.alwaysSelectAsActiveMesh = alwaysSelectAsActiveMesh
    this.AbstractMesh.actionManager = actionManager
    this.AbstractMesh.ellipsoid = ellipsoid
    this.AbstractMesh.ellipsoidOffset = ellipsoidOffset
    this.AbstractMesh.collisionMask = collisionMask
    this.AbstractMesh.collisionGroup = collisionGroup
    this.AbstractMesh.edgesWidth = edgesWidth
    this.AbstractMesh.edgesColor = edgesColor
    this.AbstractMesh.subMeshes = subMeshes
    this.AbstractMesh.skeleton = skeleton
    this.AbstractMesh.onRebuildObservable = onRebuildObservable
    this.AbstractMesh.scaling = scaling
    this.AbstractMesh.isBlocked = isBlocked
    this.AbstractMesh.useBones = useBones
    this.AbstractMesh.checkCollisions = checkCollisions
    this.AbstractMesh.collider = collider
  }

  render () {
    return null
  }
}

export default withScene(AbstractMesh)

