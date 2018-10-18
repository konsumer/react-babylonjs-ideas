import React from 'react'

class CannonJSPlugin extends React.Component {
  constructor (props) {
    super(props)
    const { world, name, BJSCANNON } = props
    this.CannonJSPlugin = new CannonJSPlugin(world, name, BJSCANNON)
  }

  render () {
    return null
  }
}

export default CannonJSPlugin

