import React from 'react'
import BABYLON from 'babylonjs'

class PanoramaToCubeMapTools extends React.Component {
  constructor (props) {
    super(props)
    const { FACE_FRONT, FACE_BACK, FACE_RIGHT, FACE_LEFT, FACE_DOWN, FACE_UP, CreateCubemapTexture, CalcProjectionSpherical } = props
    this.PanoramaToCubeMapTools = new BABYLON.PanoramaToCubeMapTools()
    this.PanoramaToCubeMapTools.FACE_FRONT = FACE_FRONT
    this.PanoramaToCubeMapTools.FACE_BACK = FACE_BACK
    this.PanoramaToCubeMapTools.FACE_RIGHT = FACE_RIGHT
    this.PanoramaToCubeMapTools.FACE_LEFT = FACE_LEFT
    this.PanoramaToCubeMapTools.FACE_DOWN = FACE_DOWN
    this.PanoramaToCubeMapTools.FACE_UP = FACE_UP
    this.PanoramaToCubeMapTools.CreateCubemapTexture = CreateCubemapTexture
    this.PanoramaToCubeMapTools.CalcProjectionSpherical = CalcProjectionSpherical
  }

  render () {
    return null
  }
}

export default PanoramaToCubeMapTools

