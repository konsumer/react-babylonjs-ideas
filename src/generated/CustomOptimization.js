import React from 'react'
import BABYLON from 'babylonjs'

class CustomOptimization extends React.Component {
  constructor (props) {
    super(props)
    const { onApply, onGetDescription } = props
    this.CustomOptimization = new BABYLON.CustomOptimization()
    this.CustomOptimization.onApply = onApply
    this.CustomOptimization.onGetDescription = onGetDescription
  }

  render () {
    return null
  }
}

export default CustomOptimization

