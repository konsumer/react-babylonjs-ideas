import React from 'react'

class BaseSubMesh extends React.Component {
  constructor (props) {
    super(props)
    const { effect } = props
    this.BaseSubMesh = new BaseSubMesh(effect)
  }

  render () {
    return null
  }
}

export default BaseSubMesh

