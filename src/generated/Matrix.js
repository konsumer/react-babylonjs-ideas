import React from 'react'
import BABYLON from 'babylonjs'

class Matrix extends React.Component {
  constructor (props) {
    super(props)
    const { updateFlag, m, IdentityReadOnly } = props
    this.Matrix = new BABYLON.Matrix()
    this.Matrix.updateFlag = updateFlag
    this.Matrix.m = m
    this.Matrix.IdentityReadOnly = IdentityReadOnly
  }

  render () {
    return null
  }
}

export default Matrix

