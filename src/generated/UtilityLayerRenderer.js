import React from 'react'
import BABYLON from 'babylonjs'

class UtilityLayerRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { originalScene, DefaultUtilityLayer, DefaultKeepDepthUtilityLayer, utilityLayerScene, shouldRender, onlyCheckPointerDownEvents, processAllEvents, onPointerOutObservable, mainSceneTrackerPredicate, originalScene } = props
    this.UtilityLayerRenderer = new BABYLON.UtilityLayerRenderer(originalScene)
    this.UtilityLayerRenderer.originalScene = originalScene
    this.UtilityLayerRenderer.DefaultUtilityLayer = DefaultUtilityLayer
    this.UtilityLayerRenderer.DefaultKeepDepthUtilityLayer = DefaultKeepDepthUtilityLayer
    this.UtilityLayerRenderer.utilityLayerScene = utilityLayerScene
    this.UtilityLayerRenderer.shouldRender = shouldRender
    this.UtilityLayerRenderer.onlyCheckPointerDownEvents = onlyCheckPointerDownEvents
    this.UtilityLayerRenderer.processAllEvents = processAllEvents
    this.UtilityLayerRenderer.onPointerOutObservable = onPointerOutObservable
    this.UtilityLayerRenderer.mainSceneTrackerPredicate = mainSceneTrackerPredicate
  }

  render () {
    return null
  }
}

export default UtilityLayerRenderer

