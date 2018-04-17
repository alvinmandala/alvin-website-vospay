// @flow

import { Text as TextR } from 'react-native'
import React, { Component } from 'react'
import { WHITE } from '../constants/color.js'

type Props = {
  style?: Object,
  children?: mixed,
  header?: boolean,
}

let DEFAULT_STYLE = {
  color: WHITE,
  fontSize: 16,
  fontFamily: 'sans-serif',
}

class Text extends Component<Props> {
  render() {
    let { style, children } = this.props
    return <TextR style={{ ...DEFAULT_STYLE, ...style }}>{children}</TextR>
  }
}

export default Text
