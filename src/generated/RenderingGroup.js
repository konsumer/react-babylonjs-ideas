import React from 'react'

class RenderingGroup extends React.Component {
  constructor (props) {
    super(props)
    const { index, onBeforeTransparentRendering, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn, renderOpaqueSorted, renderAlphaTestSorted, renderTransparentSorted } = props
    this.RenderingGroup = new RenderingGroup(index, onBeforeTransparentRendering, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn, renderOpaqueSorted, renderAlphaTestSorted, renderTransparentSorted)
  }

  render () {
    return null
  }
}

export default RenderingGroup

