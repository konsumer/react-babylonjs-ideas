import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'
import { withEngine } from './Engine'

class VolumetricLightScatteringPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { attachedNode, customMeshPosition, useCustomMeshPosition, invert, mesh, useDiffuseColor, excludedMeshes, exposure, decay, weight, density, name, ratio, camera, mesh, samples, samplingMode, engine, reusable, scene } = props
    this.VolumetricLightScatteringPostProcess = new BABYLON.VolumetricLightScatteringPostProcess(name, ratio, camera, mesh, samples, samplingMode, engine, reusable, scene)
    this.VolumetricLightScatteringPostProcess.attachedNode = attachedNode
    this.VolumetricLightScatteringPostProcess.customMeshPosition = customMeshPosition
    this.VolumetricLightScatteringPostProcess.useCustomMeshPosition = useCustomMeshPosition
    this.VolumetricLightScatteringPostProcess.invert = invert
    this.VolumetricLightScatteringPostProcess.mesh = mesh
    this.VolumetricLightScatteringPostProcess.useDiffuseColor = useDiffuseColor
    this.VolumetricLightScatteringPostProcess.excludedMeshes = excludedMeshes
    this.VolumetricLightScatteringPostProcess.exposure = exposure
    this.VolumetricLightScatteringPostProcess.decay = decay
    this.VolumetricLightScatteringPostProcess.weight = weight
    this.VolumetricLightScatteringPostProcess.density = density
  }

  render () {
    return null
  }
}

export default withEngine(VolumetricLightScatteringPostProcess)

