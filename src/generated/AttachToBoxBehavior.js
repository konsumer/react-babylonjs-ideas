import React from 'react'
import BABYLON from 'babylonjs'

class AttachToBoxBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { ui, name, distanceAwayFromFace, distanceAwayFromBottomOfFace, ui } = props
    this.AttachToBoxBehavior = new BABYLON.AttachToBoxBehavior(ui)
    this.AttachToBoxBehavior.ui = ui
    this.AttachToBoxBehavior.name = name
    this.AttachToBoxBehavior.distanceAwayFromFace = distanceAwayFromFace
    this.AttachToBoxBehavior.distanceAwayFromBottomOfFace = distanceAwayFromBottomOfFace
  }

  render () {
    return null
  }
}

export default AttachToBoxBehavior

