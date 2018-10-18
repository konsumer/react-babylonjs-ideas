import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RenderingGroup extends React.Component {
  constructor (props) {
    super(props)
    const { index, onBeforeTransparentRendering, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn, renderOpaqueSorted, renderAlphaTestSorted, renderTransparentSorted, renderSorted, renderUnsorted, index, scene, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn } = props
    this.RenderingGroup = new BABYLON.RenderingGroup(index, scene, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn)
    this.RenderingGroup.index = index
    this.RenderingGroup.onBeforeTransparentRendering = onBeforeTransparentRendering
    this.RenderingGroup.opaqueSortCompareFn = opaqueSortCompareFn
    this.RenderingGroup.alphaTestSortCompareFn = alphaTestSortCompareFn
    this.RenderingGroup.transparentSortCompareFn = transparentSortCompareFn
    this.RenderingGroup.renderOpaqueSorted = renderOpaqueSorted
    this.RenderingGroup.renderAlphaTestSorted = renderAlphaTestSorted
    this.RenderingGroup.renderTransparentSorted = renderTransparentSorted
    this.RenderingGroup.renderSorted = renderSorted
    this.RenderingGroup.renderUnsorted = renderUnsorted
  }

  render () {
    return null
  }
}

export default withScene(RenderingGroup)

