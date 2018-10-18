import React from 'react'
import BABYLON from 'babylonjs'

class PointerInfoPre extends React.Component {
  constructor (props) {
    super(props)
    const { ray, localPosition, skipOnPointerObservable, type, event, localX, localY } = props
    this.PointerInfoPre = new BABYLON.PointerInfoPre(type, event, localX, localY)
    this.PointerInfoPre.ray = ray
    this.PointerInfoPre.localPosition = localPosition
    this.PointerInfoPre.skipOnPointerObservable = skipOnPointerObservable
  }

  render () {
    return null
  }
}

export default PointerInfoPre

