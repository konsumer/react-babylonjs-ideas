import React from 'react'

class MorphTargetManager extends React.Component {
  constructor (props) {
    super(props)
    const { uniqueId, vertexCount, supportsNormals, supportsTangents, numTargets, numInfluencers, influences } = props
    this.MorphTargetManager = new MorphTargetManager(uniqueId, vertexCount, supportsNormals, supportsTangents, numTargets, numInfluencers, influences)
  }

  render () {
    return null
  }
}

export default MorphTargetManager

