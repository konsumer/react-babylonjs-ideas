import React from 'react'

class ChromaticAberrationPostProcess extends React.Component {
  constructor (props) {
    super(props)
    const { aberrationAmount, radialIntensity, direction, centerPosition } = props
    this.ChromaticAberrationPostProcess = new ChromaticAberrationPostProcess(aberrationAmount, radialIntensity, direction, centerPosition)
  }

  render () {
    return null
  }
}

export default ChromaticAberrationPostProcess

