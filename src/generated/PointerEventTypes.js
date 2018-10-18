import React from 'react'
import BABYLON from 'babylonjs'

class PointerEventTypes extends React.Component {
  constructor (props) {
    super(props)
    const { POINTERDOWN, POINTERUP, POINTERMOVE, POINTERWHEEL, POINTERPICK, POINTERTAP, POINTERDOUBLETAP } = props
    this.PointerEventTypes = new BABYLON.PointerEventTypes()
    this.PointerEventTypes.POINTERDOWN = POINTERDOWN
    this.PointerEventTypes.POINTERUP = POINTERUP
    this.PointerEventTypes.POINTERMOVE = POINTERMOVE
    this.PointerEventTypes.POINTERWHEEL = POINTERWHEEL
    this.PointerEventTypes.POINTERPICK = POINTERPICK
    this.PointerEventTypes.POINTERTAP = POINTERTAP
    this.PointerEventTypes.POINTERDOUBLETAP = POINTERDOUBLETAP
  }

  render () {
    return null
  }
}

export default PointerEventTypes

