import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class Analyser extends React.Component {
  constructor (props) {
    super(props)
    const { SMOOTHING, FFT_SIZE, BARGRAPHAMPLITUDE, DEBUGCANVASPOS, DEBUGCANVASSIZE, scene } = props
    this.Analyser = new BABYLON.Analyser(scene)
    this.Analyser.SMOOTHING = SMOOTHING
    this.Analyser.FFT_SIZE = FFT_SIZE
    this.Analyser.BARGRAPHAMPLITUDE = BARGRAPHAMPLITUDE
    this.Analyser.DEBUGCANVASPOS = DEBUGCANVASPOS
    this.Analyser.DEBUGCANVASSIZE = DEBUGCANVASSIZE
  }

  render () {
    return null
  }
}

export default withScene(Analyser)

