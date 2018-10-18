import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class VRExperienceHelper extends React.Component {
  constructor (props) {
    super(props)
    const { webVROptions, onEnteringVRObservable, onExitingVRObservable, onControllerMeshLoadedObservable, onEnteringVR, onExitingVR, onControllerMeshLoaded, onNewMeshSelected, onNewMeshPicked, onBeforeCameraTeleport, onAfterCameraTeleport, onSelectedMeshUnselected, raySelectionPredicate, meshSelectionPredicate, teleportationEnabled, teleportationTarget, gazeTrackerMesh, updateGazeTrackerScale, leftControllerGazeTrackerMesh, rightControllerGazeTrackerMesh, displayGaze, displayLaserPointer, deviceOrientationCamera, currentVRCamera, webVRCamera, vrDeviceOrientationCamera, isInVRMode, onVrDisplayPresentChange, onVRDisplayChanged, moveButtonToBottomRight, displayVRButton, updateButtonVisibility, position, beforeRender, scene, webVROptions } = props
    this.VRExperienceHelper = new BABYLON.VRExperienceHelper(scene, webVROptions)
    this.VRExperienceHelper.webVROptions = webVROptions
    this.VRExperienceHelper.onEnteringVRObservable = onEnteringVRObservable
    this.VRExperienceHelper.onExitingVRObservable = onExitingVRObservable
    this.VRExperienceHelper.onControllerMeshLoadedObservable = onControllerMeshLoadedObservable
    this.VRExperienceHelper.onEnteringVR = onEnteringVR
    this.VRExperienceHelper.onExitingVR = onExitingVR
    this.VRExperienceHelper.onControllerMeshLoaded = onControllerMeshLoaded
    this.VRExperienceHelper.onNewMeshSelected = onNewMeshSelected
    this.VRExperienceHelper.onNewMeshPicked = onNewMeshPicked
    this.VRExperienceHelper.onBeforeCameraTeleport = onBeforeCameraTeleport
    this.VRExperienceHelper.onAfterCameraTeleport = onAfterCameraTeleport
    this.VRExperienceHelper.onSelectedMeshUnselected = onSelectedMeshUnselected
    this.VRExperienceHelper.raySelectionPredicate = raySelectionPredicate
    this.VRExperienceHelper.meshSelectionPredicate = meshSelectionPredicate
    this.VRExperienceHelper.teleportationEnabled = teleportationEnabled
    this.VRExperienceHelper.teleportationTarget = teleportationTarget
    this.VRExperienceHelper.gazeTrackerMesh = gazeTrackerMesh
    this.VRExperienceHelper.updateGazeTrackerScale = updateGazeTrackerScale
    this.VRExperienceHelper.leftControllerGazeTrackerMesh = leftControllerGazeTrackerMesh
    this.VRExperienceHelper.rightControllerGazeTrackerMesh = rightControllerGazeTrackerMesh
    this.VRExperienceHelper.displayGaze = displayGaze
    this.VRExperienceHelper.displayLaserPointer = displayLaserPointer
    this.VRExperienceHelper.deviceOrientationCamera = deviceOrientationCamera
    this.VRExperienceHelper.currentVRCamera = currentVRCamera
    this.VRExperienceHelper.webVRCamera = webVRCamera
    this.VRExperienceHelper.vrDeviceOrientationCamera = vrDeviceOrientationCamera
    this.VRExperienceHelper.isInVRMode = isInVRMode
    this.VRExperienceHelper.onVrDisplayPresentChange = onVrDisplayPresentChange
    this.VRExperienceHelper.onVRDisplayChanged = onVRDisplayChanged
    this.VRExperienceHelper.moveButtonToBottomRight = moveButtonToBottomRight
    this.VRExperienceHelper.displayVRButton = displayVRButton
    this.VRExperienceHelper.updateButtonVisibility = updateButtonVisibility
    this.VRExperienceHelper.position = position
    this.VRExperienceHelper.beforeRender = beforeRender
  }

  render () {
    return null
  }
}

export default withScene(VRExperienceHelper)

