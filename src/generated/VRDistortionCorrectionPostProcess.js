import React from 'react'
import BABYLON from 'babylonjs'

class VRDistortionCorrectionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { name, camera, isRightEye, vrMetrics } = props
    this.VRDistortionCorrectionPostProcess = new BABYLON.VRDistortionCorrectionPostProcess(name, camera, isRightEye, vrMetrics)
    
  }

  render () {
    return null
  }
}

export default VRDistortionCorrectionPostProcess

