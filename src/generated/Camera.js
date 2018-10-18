import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Camera extends React.Component {
  constructor (props) {
    super(props)
    const { PERSPECTIVE_CAMERA, ORTHOGRAPHIC_CAMERA, FOVMODE_VERTICAL_FIXED, FOVMODE_HORIZONTAL_FIXED, RIG_MODE_NONE, RIG_MODE_STEREOSCOPIC_ANAGLYPH, RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL, RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED, RIG_MODE_STEREOSCOPIC_OVERUNDER, RIG_MODE_VR, RIG_MODE_WEBVR, ForceAttachControlToAlwaysPreventDefault, UseAlternateWebVRRendering, inputs, position, upVector, orthoLeft, orthoRight, orthoBottom, orthoTop, fov, minZ, maxZ, inertia, mode, isIntermediate, viewport, layerMask, fovMode, cameraRigMode, interaxialDistance, isStereoscopicSideBySide, customRenderTargets, onViewMatrixChangedObservable, onProjectionMatrixChangedObservable, onAfterCheckInputsObservable, onRestoreStateObservable, globalPosition, rigCameras, rigPostProcess, leftCamera, rightCamera, name, position, scene, setActiveOnSceneIfNoneActive } = props
    this.Camera = new BABYLON.Camera(name, position, scene, setActiveOnSceneIfNoneActive)
    this.Camera.PERSPECTIVE_CAMERA = PERSPECTIVE_CAMERA
    this.Camera.ORTHOGRAPHIC_CAMERA = ORTHOGRAPHIC_CAMERA
    this.Camera.FOVMODE_VERTICAL_FIXED = FOVMODE_VERTICAL_FIXED
    this.Camera.FOVMODE_HORIZONTAL_FIXED = FOVMODE_HORIZONTAL_FIXED
    this.Camera.RIG_MODE_NONE = RIG_MODE_NONE
    this.Camera.RIG_MODE_STEREOSCOPIC_ANAGLYPH = RIG_MODE_STEREOSCOPIC_ANAGLYPH
    this.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL
    this.Camera.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED
    this.Camera.RIG_MODE_STEREOSCOPIC_OVERUNDER = RIG_MODE_STEREOSCOPIC_OVERUNDER
    this.Camera.RIG_MODE_VR = RIG_MODE_VR
    this.Camera.RIG_MODE_WEBVR = RIG_MODE_WEBVR
    this.Camera.ForceAttachControlToAlwaysPreventDefault = ForceAttachControlToAlwaysPreventDefault
    this.Camera.UseAlternateWebVRRendering = UseAlternateWebVRRendering
    this.Camera.inputs = inputs
    this.Camera.position = position
    this.Camera.upVector = upVector
    this.Camera.orthoLeft = orthoLeft
    this.Camera.orthoRight = orthoRight
    this.Camera.orthoBottom = orthoBottom
    this.Camera.orthoTop = orthoTop
    this.Camera.fov = fov
    this.Camera.minZ = minZ
    this.Camera.maxZ = maxZ
    this.Camera.inertia = inertia
    this.Camera.mode = mode
    this.Camera.isIntermediate = isIntermediate
    this.Camera.viewport = viewport
    this.Camera.layerMask = layerMask
    this.Camera.fovMode = fovMode
    this.Camera.cameraRigMode = cameraRigMode
    this.Camera.interaxialDistance = interaxialDistance
    this.Camera.isStereoscopicSideBySide = isStereoscopicSideBySide
    this.Camera.customRenderTargets = customRenderTargets
    this.Camera.onViewMatrixChangedObservable = onViewMatrixChangedObservable
    this.Camera.onProjectionMatrixChangedObservable = onProjectionMatrixChangedObservable
    this.Camera.onAfterCheckInputsObservable = onAfterCheckInputsObservable
    this.Camera.onRestoreStateObservable = onRestoreStateObservable
    this.Camera.globalPosition = globalPosition
    this.Camera.rigCameras = rigCameras
    this.Camera.rigPostProcess = rigPostProcess
    this.Camera.leftCamera = leftCamera
    this.Camera.rightCamera = rightCamera
  }

  render () {
    return null
  }
}

export default withScene(Camera)

