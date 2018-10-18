import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class LensFlareSystem extends React.Component {
  constructor (props) {
    super(props)
    const { name, lensFlares, borderLimit, viewportBorder, meshesSelectionPredicate, layerMask, id, isEnabled, name, emitter, scene } = props
    this.LensFlareSystem = new BABYLON.LensFlareSystem(name, emitter, scene)
    this.LensFlareSystem.name = name
    this.LensFlareSystem.lensFlares = lensFlares
    this.LensFlareSystem.borderLimit = borderLimit
    this.LensFlareSystem.viewportBorder = viewportBorder
    this.LensFlareSystem.meshesSelectionPredicate = meshesSelectionPredicate
    this.LensFlareSystem.layerMask = layerMask
    this.LensFlareSystem.id = id
    this.LensFlareSystem.isEnabled = isEnabled
  }

  render () {
    return null
  }
}

export default withScene(LensFlareSystem)

