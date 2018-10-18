import React from 'react'

class DefaultLoadingScreen extends React.Component {
  constructor (props) {
    super(props)
    const { loadingUIText, loadingUIBackgroundColor } = props
    this.DefaultLoadingScreen = new DefaultLoadingScreen(loadingUIText, loadingUIBackgroundColor)
  }

  render () {
    return null
  }
}

export default DefaultLoadingScreen

