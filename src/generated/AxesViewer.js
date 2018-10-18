import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class AxesViewer extends React.Component {
  constructor (props) {
    super(props)
    const { scene, scaleLines, scene, scaleLines } = props
    this.AxesViewer = new BABYLON.AxesViewer(scene, scaleLines)
    this.AxesViewer.scene = scene
    this.AxesViewer.scaleLines = scaleLines
  }

  render () {
    return null
  }
}

export default withScene(AxesViewer)

