import React from 'react'

class Geometry extends React.Component {
  constructor (props) {
    super(props)
    const { id, delayLoadState, delayLoadingFile, onGeometryUpdated, boundingBias, extend, doNotSerialize, notifyUpdate, toNumberArray } = props
    this.Geometry = new Geometry(id, delayLoadState, delayLoadingFile, onGeometryUpdated, boundingBias, extend, doNotSerialize, notifyUpdate, toNumberArray)
  }

  render () {
    return null
  }
}

export default Geometry

