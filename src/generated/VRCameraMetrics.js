import React from 'react'
import BABYLON from 'babylonjs'

class VRCameraMetrics extends React.Component {
  constructor (props) {
    super(props)
    const { hResolution, vResolution, hScreenSize, vScreenSize, vScreenCenter, eyeToScreenDistance, lensSeparationDistance, interpupillaryDistance, distortionK, chromaAbCorrection, postProcessScaleFactor, lensCenterOffset, compensateDistortion, aspectRatio, aspectRatioFov, leftHMatrix, rightHMatrix, leftPreViewMatrix, rightPreViewMatrix } = props
    this.VRCameraMetrics = new BABYLON.VRCameraMetrics()
    this.VRCameraMetrics.hResolution = hResolution
    this.VRCameraMetrics.vResolution = vResolution
    this.VRCameraMetrics.hScreenSize = hScreenSize
    this.VRCameraMetrics.vScreenSize = vScreenSize
    this.VRCameraMetrics.vScreenCenter = vScreenCenter
    this.VRCameraMetrics.eyeToScreenDistance = eyeToScreenDistance
    this.VRCameraMetrics.lensSeparationDistance = lensSeparationDistance
    this.VRCameraMetrics.interpupillaryDistance = interpupillaryDistance
    this.VRCameraMetrics.distortionK = distortionK
    this.VRCameraMetrics.chromaAbCorrection = chromaAbCorrection
    this.VRCameraMetrics.postProcessScaleFactor = postProcessScaleFactor
    this.VRCameraMetrics.lensCenterOffset = lensCenterOffset
    this.VRCameraMetrics.compensateDistortion = compensateDistortion
    this.VRCameraMetrics.aspectRatio = aspectRatio
    this.VRCameraMetrics.aspectRatioFov = aspectRatioFov
    this.VRCameraMetrics.leftHMatrix = leftHMatrix
    this.VRCameraMetrics.rightHMatrix = rightHMatrix
    this.VRCameraMetrics.leftPreViewMatrix = leftPreViewMatrix
    this.VRCameraMetrics.rightPreViewMatrix = rightPreViewMatrix
  }

  render () {
    return null
  }
}

export default VRCameraMetrics

