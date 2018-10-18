import React from 'react'

class Mesh extends React.Component {
  constructor (props) {
    super(props)
    const { onBeforeRenderObservable, onAfterRenderObservable, onBeforeDrawObservable, onBeforeDraw, delayLoadState, instances, delayLoadingFile, onLODLevelSelection, morphTargetManager, overrideMaterialSideOrientation, source, isUnIndexed, hasLODLevels, geometry, isBlocked, areNormalsFrozen, overridenInstanceCount, normalizeSkinFourWeights, normalizeSkinWeightsAndExtra } = props
    this.Mesh = new Mesh(onBeforeRenderObservable, onAfterRenderObservable, onBeforeDrawObservable, onBeforeDraw, delayLoadState, instances, delayLoadingFile, onLODLevelSelection, morphTargetManager, overrideMaterialSideOrientation, source, isUnIndexed, hasLODLevels, geometry, isBlocked, areNormalsFrozen, overridenInstanceCount, normalizeSkinFourWeights, normalizeSkinWeightsAndExtra)
  }

  render () {
    return null
  }
}

export default Mesh

