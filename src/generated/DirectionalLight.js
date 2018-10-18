import React from 'react'

class DirectionalLight extends React.Component {
  constructor (props) {
    super(props)
    const { shadowFrustumSize, shadowOrthoScale, autoUpdateExtends } = props
    this.DirectionalLight = new DirectionalLight(shadowFrustumSize, shadowOrthoScale, autoUpdateExtends)
  }

  render () {
    return null
  }
}

export default DirectionalLight

