import React from 'react'

class RibbonGeometry extends React.Component {
  constructor (props) {
    super(props)
    const { pathArray, closeArray, closePath, offset, side } = props
    this.RibbonGeometry = new RibbonGeometry(pathArray, closeArray, closePath, offset, side)
  }

  render () {
    return null
  }
}

export default RibbonGeometry

