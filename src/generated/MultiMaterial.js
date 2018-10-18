import React from 'react'

class MultiMaterial extends React.Component {
  constructor (props) {
    super(props)
    const { subMaterials } = props
    this.MultiMaterial = new MultiMaterial(subMaterials)
  }

  render () {
    return null
  }
}

export default MultiMaterial

