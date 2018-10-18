import React from 'react'

class RefractionTexture extends React.Component {
  constructor (props) {
    super(props)
    const { refractionPlane, depth } = props
    this.RefractionTexture = new RefractionTexture(refractionPlane, depth)
  }

  render () {
    return null
  }
}

export default RefractionTexture

