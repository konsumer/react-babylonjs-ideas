import React from 'react'
import BABYLON from 'babylonjs'

class PointerInfo extends React.Component {
  constructor (props) {
    super(props)
    const { pickInfo, type, event, pickInfo } = props
    this.PointerInfo = new BABYLON.PointerInfo(type, event, pickInfo)
    this.PointerInfo.pickInfo = pickInfo
  }

  render () {
    return null
  }
}

export default PointerInfo

