// @flow

import React, { Component } from 'react'
import { Text as TextR, StyleSheet } from 'react-native'
import { WHITE } from '../constants/color.js'

type Props = {
  style?: number | Object,
  children?: mixed,
  header?: boolean,
}

class Text extends Component<Props> {
  render() {
    let { style, children } = this.props
    style = typeof style === 'number' ? StyleSheet.flatten(style) : style
    return <TextR style={{ ...DEFAULT_STYLE, ...style }}>{children}</TextR>
  }
}

export default Text

const DEFAULT_STYLE = {
  color: WHITE,
  fontSize: 16,
  fontFamily: 'frutiger, sans-serif',
}
