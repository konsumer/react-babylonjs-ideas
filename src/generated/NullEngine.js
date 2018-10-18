import React from 'react'
import BABYLON from 'babylonjs'

class NullEngine extends React.Component {
  constructor (props) {
    super(props)
    const { options } = props
    this.NullEngine = new BABYLON.NullEngine(options)
    
  }

  render () {
    return null
  }
}

export default NullEngine

