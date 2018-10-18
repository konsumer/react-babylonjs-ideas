import React from 'react'
import BABYLON from 'babylonjs'

class StringDictionary extends React.Component {
  constructor (props) {
    super(props)
    const { count } = props
    this.StringDictionary = new BABYLON.StringDictionary()
    this.StringDictionary.count = count
  }

  render () {
    return null
  }
}

export default StringDictionary

