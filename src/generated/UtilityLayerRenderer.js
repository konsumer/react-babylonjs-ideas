import React from 'react'

class UtilityLayerRenderer extends React.Component {
  constructor (props) {
    super(props)
    const { originalScene, utilityLayerScene, shouldRender, onlyCheckPointerDownEvents, processAllEvents, onPointerOutObservable, mainSceneTrackerPredicate } = props
    this.UtilityLayerRenderer = new UtilityLayerRenderer(originalScene, utilityLayerScene, shouldRender, onlyCheckPointerDownEvents, processAllEvents, onPointerOutObservable, mainSceneTrackerPredicate)
  }

  render () {
    return null
  }
}

export default UtilityLayerRenderer

