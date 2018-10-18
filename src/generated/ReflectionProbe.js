import React from 'react'

class ReflectionProbe extends React.Component {
  constructor (props) {
    super(props)
    const { name, position, samples, refreshRate, cubeTexture, renderList } = props
    this.ReflectionProbe = new ReflectionProbe(name, position, samples, refreshRate, cubeTexture, renderList)
  }

  render () {
    return null
  }
}

export default ReflectionProbe

