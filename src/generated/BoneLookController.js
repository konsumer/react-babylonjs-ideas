import React from 'react'

class BoneLookController extends React.Component {
  constructor (props) {
    super(props)
    const { target, mesh, bone, upAxis, upAxisSpace, adjustYaw, adjustPitch, adjustRoll, slerpAmount, minYaw, maxYaw, minPitch, maxPitch } = props
    this.BoneLookController = new BoneLookController(target, mesh, bone, upAxis, upAxisSpace, adjustYaw, adjustPitch, adjustRoll, slerpAmount, minYaw, maxYaw, minPitch, maxPitch)
  }

  render () {
    return null
  }
}

export default BoneLookController

