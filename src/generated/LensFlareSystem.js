import React from 'react'

class LensFlareSystem extends React.Component {
  constructor (props) {
    super(props)
    const { name, lensFlares, borderLimit, viewportBorder, meshesSelectionPredicate, layerMask, id, isEnabled } = props
    this.LensFlareSystem = new LensFlareSystem(name, lensFlares, borderLimit, viewportBorder, meshesSelectionPredicate, layerMask, id, isEnabled)
  }

  render () {
    return null
  }
}

export default LensFlareSystem

