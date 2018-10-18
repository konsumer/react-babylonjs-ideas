import React from 'react'

class Skeleton extends React.Component {
  constructor (props) {
    super(props)
    const { name, id, bones, dimensionsAtRest, needInitialSkinMatrix, animations, doNotSerialize, animationPropertiesOverride, onBeforeComputeObservable } = props
    this.Skeleton = new Skeleton(name, id, bones, dimensionsAtRest, needInitialSkinMatrix, animations, doNotSerialize, animationPropertiesOverride, onBeforeComputeObservable)
  }

  render () {
    return null
  }
}

export default Skeleton

