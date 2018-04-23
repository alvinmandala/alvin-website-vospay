// @flow
import React, { Component } from 'react'

type State = { windowWidth: number }

export default function connect(BaseComponent: *) {
  class ConnectedComponent extends Component<*, State> {
    state = { windowWidth: window.innerWidth }

    componentDidMount() {
      window.addEventListener('resize', this._onResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._onResize)
    }

    _onResize = () => {
      this.setState({ windowWidth: window.innerWidth })
    }

    render() {
      let { windowWidth } = this.state
      let props = this.props
      return <BaseComponent {...props} windowWidth={windowWidth} />
    }
  }
  return ConnectedComponent
}
