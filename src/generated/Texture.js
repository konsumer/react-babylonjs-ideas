import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Texture extends React.Component {
  constructor (props) {
    super(props)
    const { NEAREST_SAMPLINGMODE, NEAREST_NEAREST_MIPLINEAR, BILINEAR_SAMPLINGMODE, LINEAR_LINEAR_MIPNEAREST, TRILINEAR_SAMPLINGMODE, LINEAR_LINEAR_MIPLINEAR, NEAREST_NEAREST_MIPNEAREST, NEAREST_LINEAR_MIPNEAREST, NEAREST_LINEAR_MIPLINEAR, NEAREST_LINEAR, NEAREST_NEAREST, LINEAR_NEAREST_MIPNEAREST, LINEAR_NEAREST_MIPLINEAR, LINEAR_LINEAR, LINEAR_NEAREST, EXPLICIT_MODE, SPHERICAL_MODE, PLANAR_MODE, CUBIC_MODE, PROJECTION_MODE, SKYBOX_MODE, INVCUBIC_MODE, EQUIRECTANGULAR_MODE, FIXED_EQUIRECTANGULAR_MODE, FIXED_EQUIRECTANGULAR_MIRRORED_MODE, CLAMP_ADDRESSMODE, WRAP_ADDRESSMODE, MIRROR_ADDRESSMODE, UseSerializedUrlIfAny, url, uOffset, vOffset, uScale, vScale, uAng, vAng, wAng, uRotationCenter, vRotationCenter, wRotationCenter, noMipmap, onLoadObservable, isBlocking, samplingMode, url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format } = props
    this.Texture = new BABYLON.Texture(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format)
    this.Texture.NEAREST_SAMPLINGMODE = NEAREST_SAMPLINGMODE
    this.Texture.NEAREST_NEAREST_MIPLINEAR = NEAREST_NEAREST_MIPLINEAR
    this.Texture.BILINEAR_SAMPLINGMODE = BILINEAR_SAMPLINGMODE
    this.Texture.LINEAR_LINEAR_MIPNEAREST = LINEAR_LINEAR_MIPNEAREST
    this.Texture.TRILINEAR_SAMPLINGMODE = TRILINEAR_SAMPLINGMODE
    this.Texture.LINEAR_LINEAR_MIPLINEAR = LINEAR_LINEAR_MIPLINEAR
    this.Texture.NEAREST_NEAREST_MIPNEAREST = NEAREST_NEAREST_MIPNEAREST
    this.Texture.NEAREST_LINEAR_MIPNEAREST = NEAREST_LINEAR_MIPNEAREST
    this.Texture.NEAREST_LINEAR_MIPLINEAR = NEAREST_LINEAR_MIPLINEAR
    this.Texture.NEAREST_LINEAR = NEAREST_LINEAR
    this.Texture.NEAREST_NEAREST = NEAREST_NEAREST
    this.Texture.LINEAR_NEAREST_MIPNEAREST = LINEAR_NEAREST_MIPNEAREST
    this.Texture.LINEAR_NEAREST_MIPLINEAR = LINEAR_NEAREST_MIPLINEAR
    this.Texture.LINEAR_LINEAR = LINEAR_LINEAR
    this.Texture.LINEAR_NEAREST = LINEAR_NEAREST
    this.Texture.EXPLICIT_MODE = EXPLICIT_MODE
    this.Texture.SPHERICAL_MODE = SPHERICAL_MODE
    this.Texture.PLANAR_MODE = PLANAR_MODE
    this.Texture.CUBIC_MODE = CUBIC_MODE
    this.Texture.PROJECTION_MODE = PROJECTION_MODE
    this.Texture.SKYBOX_MODE = SKYBOX_MODE
    this.Texture.INVCUBIC_MODE = INVCUBIC_MODE
    this.Texture.EQUIRECTANGULAR_MODE = EQUIRECTANGULAR_MODE
    this.Texture.FIXED_EQUIRECTANGULAR_MODE = FIXED_EQUIRECTANGULAR_MODE
    this.Texture.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = FIXED_EQUIRECTANGULAR_MIRRORED_MODE
    this.Texture.CLAMP_ADDRESSMODE = CLAMP_ADDRESSMODE
    this.Texture.WRAP_ADDRESSMODE = WRAP_ADDRESSMODE
    this.Texture.MIRROR_ADDRESSMODE = MIRROR_ADDRESSMODE
    this.Texture.UseSerializedUrlIfAny = UseSerializedUrlIfAny
    this.Texture.url = url
    this.Texture.uOffset = uOffset
    this.Texture.vOffset = vOffset
    this.Texture.uScale = uScale
    this.Texture.vScale = vScale
    this.Texture.uAng = uAng
    this.Texture.vAng = vAng
    this.Texture.wAng = wAng
    this.Texture.uRotationCenter = uRotationCenter
    this.Texture.vRotationCenter = vRotationCenter
    this.Texture.wRotationCenter = wRotationCenter
    this.Texture.noMipmap = noMipmap
    this.Texture.onLoadObservable = onLoadObservable
    this.Texture.isBlocking = isBlocking
    this.Texture.samplingMode = samplingMode
  }

  render () {
    return null
  }
}

export default withScene(Texture)

