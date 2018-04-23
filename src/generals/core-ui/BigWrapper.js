// @flow
import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

type Props = {
  children: Array<mixed>,
  color?: string,
  image?: string,
  customStyle?: number | Object,
}

type State = {
  windowWidth: number,
  windowHeight: number,
}

class BigWrapper extends Component<Props, State> {
  state = { windowWidth: window.innerWidth, windowHeight: window.innerHeight }

  componentDidMount() {
    window.addEventListener('load', this._onLoadAndResize)
    window.addEventListener('resize', this._onLoadAndResize)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this._onLoadAndResize)
    window.removeEventListener('resize', this._onLoadAndResize)
  }

  _onLoadAndResize = () => {
    let windowHeight = window.innerHeight > 830 ? window.innerHeight : 830
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight,
    })
  }
  render() {
    let { children, color, image, customStyle } = this.props
    let { windowWidth, windowHeight } = this.state
    customStyle =
      typeof customStyle === 'number'
        ? StyleSheet.flatten(customStyle)
        : customStyle
    return (
      <View
        style={{
          backgroundColor: color,
          backgroundImage: image,
          flex: 1,
          height: windowHeight,
          paddingBottom: 30,
          ...customStyle,
        }}
      >
        {children}
      </View>
    )
  }
}

export default BigWrapper

// const styles = StyleSheet.create({})
