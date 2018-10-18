import React from 'react'
import BABYLON from 'babylonjs'

class Tmp extends React.Component {
  constructor (props) {
    super(props)
    const { Color3, Color4, Vector2, Vector3, Vector4, Quaternion, Matrix } = props
    this.Tmp = new BABYLON.Tmp()
    this.Tmp.Color3 = Color3
    this.Tmp.Color4 = Color4
    this.Tmp.Vector2 = Vector2
    this.Tmp.Vector3 = Vector3
    this.Tmp.Vector4 = Vector4
    this.Tmp.Quaternion = Quaternion
    this.Tmp.Matrix = Matrix
  }

  render () {
    return null
  }
}

export default Tmp

