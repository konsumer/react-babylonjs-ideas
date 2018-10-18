import React from 'react'
import BABYLON from 'babylonjs'

class SmartArray extends React.Component {
  constructor (props) {
    super(props)
    const { data, length, capacity } = props
    this.SmartArray = new BABYLON.SmartArray(capacity)
    this.SmartArray.data = data
    this.SmartArray.length = length
  }

  render () {
    return null
  }
}

export default SmartArray

