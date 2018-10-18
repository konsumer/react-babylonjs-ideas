import React from 'react'

class SoundTrack extends React.Component {
  constructor (props) {
    super(props)
    const { id, soundCollection } = props
    this.SoundTrack = new SoundTrack(id, soundCollection)
  }

  render () {
    return null
  }
}

export default SoundTrack

