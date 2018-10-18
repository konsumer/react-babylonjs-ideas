import React from 'react'

class SmartArray extends React.Component {
  constructor (props) {
    super(props)
    const { data, length } = props
    this.SmartArray = new SmartArray(data, length)
  }

  render () {
    return null
  }
}

export default SmartArray

