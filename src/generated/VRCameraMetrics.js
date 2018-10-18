import React from 'react'

class VRCameraMetrics extends React.Component {
  constructor (props) {
    super(props)
    const { hResolution, vResolution, hScreenSize, vScreenSize, vScreenCenter, eyeToScreenDistance, lensSeparationDistance, interpupillaryDistance, distortionK, chromaAbCorrection, postProcessScaleFactor, lensCenterOffset, compensateDistortion, aspectRatio, aspectRatioFov, leftHMatrix, rightHMatrix, leftPreViewMatrix, rightPreViewMatrix } = props
    this.VRCameraMetrics = new VRCameraMetrics(hResolution, vResolution, hScreenSize, vScreenSize, vScreenCenter, eyeToScreenDistance, lensSeparationDistance, interpupillaryDistance, distortionK, chromaAbCorrection, postProcessScaleFactor, lensCenterOffset, compensateDistortion, aspectRatio, aspectRatioFov, leftHMatrix, rightHMatrix, leftPreViewMatrix, rightPreViewMatrix)
  }

  render () {
    return null
  }
}

export default VRCameraMetrics

