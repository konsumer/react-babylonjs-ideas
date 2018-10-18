import React from 'react'

class RefractionPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { color, depth, colorLevel, refractionTexture } = props
    this.RefractionPostProcess = new RefractionPostProcess(color, depth, colorLevel, refractionTexture)
  }

  render () {
    return null
  }
}

export default RefractionPostProcess

