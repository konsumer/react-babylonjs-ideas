import React from 'react'
import BABYLON from 'babylonjs'
import { withEngine } from './Engine'

class ConvolutionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { kernel, EdgeDetect0Kernel, EdgeDetect1Kernel, EdgeDetect2Kernel, SharpenKernel, EmbossKernel, GaussianKernel, name, kernel, options, camera, samplingMode, engine, reusable, textureType } = props
    this.ConvolutionPostProcess = new BABYLON.ConvolutionPostProcess(name, kernel, options, camera, samplingMode, engine, reusable, textureType)
    this.ConvolutionPostProcess.kernel = kernel
    this.ConvolutionPostProcess.EdgeDetect0Kernel = EdgeDetect0Kernel
    this.ConvolutionPostProcess.EdgeDetect1Kernel = EdgeDetect1Kernel
    this.ConvolutionPostProcess.EdgeDetect2Kernel = EdgeDetect2Kernel
    this.ConvolutionPostProcess.SharpenKernel = SharpenKernel
    this.ConvolutionPostProcess.EmbossKernel = EmbossKernel
    this.ConvolutionPostProcess.GaussianKernel = GaussianKernel
  }

  render () {
    return null
  }
}

export default withEngine(ConvolutionPostProcess)

