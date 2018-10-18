import React from 'react'

class InstancingAttributeInfo extends React.Component {
  constructor (props) {
    super(props)
    const { index, attributeSize, attribyteType, normalized, offset, attributeName } = props
    this.InstancingAttributeInfo = new InstancingAttributeInfo(index, attributeSize, attribyteType, normalized, offset, attributeName)
  }

  render () {
    return null
  }
}

export default InstancingAttributeInfo

