import React from 'react'
import BABYLON from 'babylonjs'

class ImageProcessingConfigurationDefines extends React.Component {
  constructor (props) {
    super(props)
    const { IMAGEPROCESSING, VIGNETTE, VIGNETTEBLENDMODEMULTIPLY, VIGNETTEBLENDMODEOPAQUE, TONEMAPPING, TONEMAPPING_ACES, CONTRAST, COLORCURVES, COLORGRADING, COLORGRADING3D, SAMPLER3DGREENDEPTH, SAMPLER3DBGRMAP, IMAGEPROCESSINGPOSTPROCESS, EXPOSURE } = props
    this.ImageProcessingConfigurationDefines = new BABYLON.ImageProcessingConfigurationDefines()
    this.ImageProcessingConfigurationDefines.IMAGEPROCESSING = IMAGEPROCESSING
    this.ImageProcessingConfigurationDefines.VIGNETTE = VIGNETTE
    this.ImageProcessingConfigurationDefines.VIGNETTEBLENDMODEMULTIPLY = VIGNETTEBLENDMODEMULTIPLY
    this.ImageProcessingConfigurationDefines.VIGNETTEBLENDMODEOPAQUE = VIGNETTEBLENDMODEOPAQUE
    this.ImageProcessingConfigurationDefines.TONEMAPPING = TONEMAPPING
    this.ImageProcessingConfigurationDefines.TONEMAPPING_ACES = TONEMAPPING_ACES
    this.ImageProcessingConfigurationDefines.CONTRAST = CONTRAST
    this.ImageProcessingConfigurationDefines.COLORCURVES = COLORCURVES
    this.ImageProcessingConfigurationDefines.COLORGRADING = COLORGRADING
    this.ImageProcessingConfigurationDefines.COLORGRADING3D = COLORGRADING3D
    this.ImageProcessingConfigurationDefines.SAMPLER3DGREENDEPTH = SAMPLER3DGREENDEPTH
    this.ImageProcessingConfigurationDefines.SAMPLER3DBGRMAP = SAMPLER3DBGRMAP
    this.ImageProcessingConfigurationDefines.IMAGEPROCESSINGPOSTPROCESS = IMAGEPROCESSINGPOSTPROCESS
    this.ImageProcessingConfigurationDefines.EXPOSURE = EXPOSURE
  }

  render () {
    return null
  }
}

export default ImageProcessingConfigurationDefines

