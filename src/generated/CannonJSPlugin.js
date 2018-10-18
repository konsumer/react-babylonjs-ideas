import React from 'react'
import BABYLON from 'babylonjs'

class CannonJSPlugin extends React.Component {
  constructor (props) {
    super(props)
    const { world, name, BJSCANNON, _useDeltaForWorldStep, iterations } = props
    this.CannonJSPlugin = new BABYLON.CannonJSPlugin(_useDeltaForWorldStep, iterations)
    this.CannonJSPlugin.world = world
    this.CannonJSPlugin.name = name
    this.CannonJSPlugin.BJSCANNON = BJSCANNON
  }

  render () {
    return null
  }
}

export default CannonJSPlugin

