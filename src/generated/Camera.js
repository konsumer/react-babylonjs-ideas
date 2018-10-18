import React from 'react'

class Camera extends React.Component {
  constructor (props) {
    super(props)
    const { inputs, position, upVector, orthoLeft, orthoRight, orthoBottom, orthoTop, fov, minZ, maxZ, inertia, mode, isIntermediate, viewport, layerMask, fovMode, cameraRigMode, interaxialDistance, isStereoscopicSideBySide, customRenderTargets, onViewMatrixChangedObservable, onProjectionMatrixChangedObservable, onAfterCheckInputsObservable, onRestoreStateObservable, globalPosition, rigCameras, rigPostProcess, leftCamera, rightCamera } = props
    this.Camera = new Camera(inputs, position, upVector, orthoLeft, orthoRight, orthoBottom, orthoTop, fov, minZ, maxZ, inertia, mode, isIntermediate, viewport, layerMask, fovMode, cameraRigMode, interaxialDistance, isStereoscopicSideBySide, customRenderTargets, onViewMatrixChangedObservable, onProjectionMatrixChangedObservable, onAfterCheckInputsObservable, onRestoreStateObservable, globalPosition, rigCameras, rigPostProcess, leftCamera, rightCamera)
  }

  render () {
    return null
  }
}

export default Camera

