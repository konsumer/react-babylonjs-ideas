import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { omit } from 'lodash'

class Timer extends PureComponent {
  static get propTypes () {
    return {
      Component: PropTypes.func.isRequired,
      interval: PropTypes.number,
      innerRef: PropTypes.func
    }
  }

  static get defaultProps () {
    return {
      interval: 1000
    }
  }

  state = {
    tick: 0
  }

  componentWillMount () {
    this.intervalId = setInterval(this.tick, this.props.interval)
  }

  componentWillUnount () {
    clearInterval(this.intervalId)
  }

  tick = () => {
    this.setState({
      tick: this.state.tick + 1
    })
  }

  render () {
    const Component = this.props.Component
    const props = omit(this.props, Object.keys(Timer.propTypes))

    return <Component time={Date.now()} ref={this.props.innerRef} {...props} />
  }
}

export default (Component) => (props) => <Timer Component={Component} {...props} />