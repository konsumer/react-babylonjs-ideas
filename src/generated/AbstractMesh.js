import React from 'react'

class AbstractMesh extends React.Component {
  constructor (props) {
    super(props)
    const { cullingStrategy, facetNb, partitioningSubdivisions, partitioningBBoxRatio, mustDepthSortFacets, facetDepthSortFrom, isFacetDataEnabled, onCollideObservable, onCollide, onCollisionPositionChangeObservable, onCollisionPositionChange, onMaterialChangedObservable, definedFacingForward, visibility, alphaIndex, isVisible, isPickable, showSubMeshesBoundingBox, isBlocker, enablePointerMoveEvents, renderingGroupId, material, receiveShadows, outlineColor, outlineWidth, overlayColor, overlayAlpha, hasVertexAlpha, useVertexColors, computeBonesUsingShaders, numBoneInfluencers, applyFog, useOctreeForRenderingSelection, useOctreeForPicking, useOctreeForCollisions, layerMask, alwaysSelectAsActiveMesh, actionManager, ellipsoid, ellipsoidOffset, collisionMask, collisionGroup, edgesWidth, edgesColor, subMeshes, skeleton, onRebuildObservable, scaling, isBlocked, useBones, checkCollisions, collider } = props
    this.AbstractMesh = new AbstractMesh(cullingStrategy, facetNb, partitioningSubdivisions, partitioningBBoxRatio, mustDepthSortFacets, facetDepthSortFrom, isFacetDataEnabled, onCollideObservable, onCollide, onCollisionPositionChangeObservable, onCollisionPositionChange, onMaterialChangedObservable, definedFacingForward, visibility, alphaIndex, isVisible, isPickable, showSubMeshesBoundingBox, isBlocker, enablePointerMoveEvents, renderingGroupId, material, receiveShadows, outlineColor, outlineWidth, overlayColor, overlayAlpha, hasVertexAlpha, useVertexColors, computeBonesUsingShaders, numBoneInfluencers, applyFog, useOctreeForRenderingSelection, useOctreeForPicking, useOctreeForCollisions, layerMask, alwaysSelectAsActiveMesh, actionManager, ellipsoid, ellipsoidOffset, collisionMask, collisionGroup, edgesWidth, edgesColor, subMeshes, skeleton, onRebuildObservable, scaling, isBlocked, useBones, checkCollisions, collider)
  }

  render () {
    return null
  }
}

export default AbstractMesh

