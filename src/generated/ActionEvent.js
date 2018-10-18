import React from 'react'
import BABYLON from 'babylonjs'

class ActionEvent extends React.Component {
  constructor (props) {
    super(props)
    const { source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData, source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData } = props
    this.ActionEvent = new BABYLON.ActionEvent(source, pointerX, pointerY, meshUnderPointer, sourceEvent, additionalData)
    this.ActionEvent.source = source
    this.ActionEvent.pointerX = pointerX
    this.ActionEvent.pointerY = pointerY
    this.ActionEvent.meshUnderPointer = meshUnderPointer
    this.ActionEvent.sourceEvent = sourceEvent
    this.ActionEvent.additionalData = additionalData
  }

  render () {
    return null
  }
}

export default ActionEvent

