import React from 'react'

class CameraInputsManager extends React.Component {
  constructor (props) {
    super(props)
    const { attached, attachedElement, noPreventDefault, camera, checkInputs } = props
    this.CameraInputsManager = new CameraInputsManager(attached, attachedElement, noPreventDefault, camera, checkInputs)
  }

  render () {
    return null
  }
}

export default CameraInputsManager

