import React from 'react'
import BABYLON from 'babylonjs'

class MaterialDefines extends React.Component {
  constructor (props) {
    super(props)
    const { isDirty } = props
    this.MaterialDefines = new BABYLON.MaterialDefines()
    this.MaterialDefines.isDirty = isDirty
  }

  render () {
    return null
  }
}

export default MaterialDefines

