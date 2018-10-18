import React from 'react'

class OimoJSPlugin extends React.Component {
  constructor (props) {
    super(props)
    const { world, name, BJSOIMO } = props
    this.OimoJSPlugin = new OimoJSPlugin(world, name, BJSOIMO)
  }

  render () {
    return null
  }
}

export default OimoJSPlugin

