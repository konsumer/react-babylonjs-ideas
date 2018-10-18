import React from 'react'
import BABYLON from 'babylonjs'

class GenericPad extends React.Component {
  constructor (props) {
    super(props)
    const { onButtonDownObservable, onButtonUpObservable, id, index, browserGamepad } = props
    this.GenericPad = new BABYLON.GenericPad(id, index, browserGamepad)
    this.GenericPad.onButtonDownObservable = onButtonDownObservable
    this.GenericPad.onButtonUpObservable = onButtonUpObservable
  }

  render () {
    return null
  }
}

export default GenericPad

