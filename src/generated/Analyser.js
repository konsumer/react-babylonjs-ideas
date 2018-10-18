import React from 'react'

class Analyser extends React.Component {
  constructor (props) {
    super(props)
    const { SMOOTHING, FFT_SIZE, BARGRAPHAMPLITUDE, DEBUGCANVASPOS, DEBUGCANVASSIZE } = props
    this.Analyser = new Analyser(SMOOTHING, FFT_SIZE, BARGRAPHAMPLITUDE, DEBUGCANVASPOS, DEBUGCANVASSIZE)
  }

  render () {
    return null
  }
}

export default Analyser

