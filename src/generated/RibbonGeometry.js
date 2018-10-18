import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class RibbonGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { pathArray, closeArray, closePath, offset, side, id, scene, pathArray, closeArray, closePath, offset, canBeRegenerated, mesh, side } = props
    this.RibbonGeometry = new BABYLON.RibbonGeometry(id, scene, pathArray, closeArray, closePath, offset, canBeRegenerated, mesh, side)
    this.RibbonGeometry.pathArray = pathArray
    this.RibbonGeometry.closeArray = closeArray
    this.RibbonGeometry.closePath = closePath
    this.RibbonGeometry.offset = offset
    this.RibbonGeometry.side = side
  }

  render () {
    return null
  }
}

export default withScene(RibbonGeometry)

