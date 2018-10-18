import React from 'react'
import BABYLON from 'babylonjs'

class MultiPointerScaleBehavior extends React.Component {
  constructor (props) {
    super(props)
    const { name } = props
    this.MultiPointerScaleBehavior = new BABYLON.MultiPointerScaleBehavior()
    this.MultiPointerScaleBehavior.name = name
  }

  render () {
    return null
  }
}

export default MultiPointerScaleBehavior

