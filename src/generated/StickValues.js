import React from 'react'
import BABYLON from 'babylonjs'

class StickValues extends React.Component {
  constructor (props) {
    super(props)
    const { x, y, x, y } = props
    this.StickValues = new BABYLON.StickValues(x, y)
    this.StickValues.x = x
    this.StickValues.y = y
  }

  render () {
    return null
  }
}

export default StickValues

