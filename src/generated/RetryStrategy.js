import React from 'react'
import BABYLON from 'babylonjs'

class RetryStrategy extends React.Component {
  constructor (props) {
    super(props)
    const {  } = props
    this.RetryStrategy = new BABYLON.RetryStrategy()
    
  }

  render () {
    return null
  }
}

export default RetryStrategy

