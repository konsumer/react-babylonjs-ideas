import React from 'react'
import BABYLON from 'babylonjs'
import { withScene } from './Scene'

class DebugLayer extends React.Component {
  constructor (props) {
    super(props)
    const { InspectorURL, BJSINSPECTOR, onPropertyChangedObservable, scene } = props
    this.DebugLayer = new BABYLON.DebugLayer(scene)
    this.DebugLayer.InspectorURL = InspectorURL
    this.DebugLayer.BJSINSPECTOR = BJSINSPECTOR
    this.DebugLayer.onPropertyChangedObservable = onPropertyChangedObservable
  }

  render () {
    return null
  }
}

export default withScene(DebugLayer)

