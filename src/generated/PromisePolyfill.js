import React from 'react'
import BABYLON from 'babylonjs'

class PromisePolyfill extends React.Component {
  constructor (props) {
    super(props)
    const {  } = props
    this.PromisePolyfill = new BABYLON.PromisePolyfill()
    
  }

  render () {
    return null
  }
}

export default PromisePolyfill

