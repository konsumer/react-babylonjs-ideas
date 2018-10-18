import React from 'react'
import BABYLON from 'babylonjs'

class OimoJSPlugin extends React.Component {
  constructor (props) {
    super(props)
    const { world, name, BJSOIMO, iterations } = props
    this.OimoJSPlugin = new BABYLON.OimoJSPlugin(iterations)
    this.OimoJSPlugin.world = world
    this.OimoJSPlugin.name = name
    this.OimoJSPlugin.BJSOIMO = BJSOIMO
  }

  render () {
    return null
  }
}

export default OimoJSPlugin

