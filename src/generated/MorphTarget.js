import React from 'react'

class MorphTarget extends React.Component {
  constructor (props) {
    super(props)
    const { name, animations, onInfluenceChanged, influence, animationPropertiesOverride, hasPositions, hasNormals, hasTangents } = props
    this.MorphTarget = new MorphTarget(name, animations, onInfluenceChanged, influence, animationPropertiesOverride, hasPositions, hasNormals, hasTangents)
  }

  render () {
    return null
  }
}

export default MorphTarget

