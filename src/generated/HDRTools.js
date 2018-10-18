import React from 'react'
import BABYLON from 'babylonjs'

class HDRTools extends React.Component {
  constructor (props) {
    super(props)
    const { Ldexp, Rgbe2float, readStringLine, RGBE_ReadPixels_RLE } = props
    this.HDRTools = new BABYLON.HDRTools()
    this.HDRTools.Ldexp = Ldexp
    this.HDRTools.Rgbe2float = Rgbe2float
    this.HDRTools.readStringLine = readStringLine
    this.HDRTools.RGBE_ReadPixels_RLE = RGBE_ReadPixels_RLE
  }

  render () {
    return null
  }
}

export default HDRTools

