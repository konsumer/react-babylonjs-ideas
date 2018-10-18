import React from 'react'
import BABYLON from 'babylonjs'

class InstancingAttributeInfo extends React.Component {
  constructor (props) {
    super(props)
    const { index, attributeSize, attribyteType, normalized, offset, attributeName } = props
    this.InstancingAttributeInfo = new BABYLON.InstancingAttributeInfo()
    this.InstancingAttributeInfo.index = index
    this.InstancingAttributeInfo.attributeSize = attributeSize
    this.InstancingAttributeInfo.attribyteType = attribyteType
    this.InstancingAttributeInfo.normalized = normalized
    this.InstancingAttributeInfo.offset = offset
    this.InstancingAttributeInfo.attributeName = attributeName
  }

  render () {
    return null
  }
}

export default InstancingAttributeInfo

