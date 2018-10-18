import React from 'react'

class AssetsProgressEvent extends React.Component {
  constructor (props) {
    super(props)
    const { remainingCount, totalCount, task } = props
    this.AssetsProgressEvent = new AssetsProgressEvent(remainingCount, totalCount, task)
  }

  render () {
    return null
  }
}

export default AssetsProgressEvent

