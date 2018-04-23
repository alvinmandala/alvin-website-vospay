// @flow

import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { WHITE } from '../constants/color'
import Text from './Text'

type Props = {
  style?: number | Object,
  children?: mixed,
  onMenuToggle?: () => void,
}

class Button extends Component<Props> {
  render() {
    let { style, children, onMenuToggle } = this.props
    style = typeof style === 'number' ? StyleSheet.flatten(style) : style
    return (
      <TouchableOpacity
        onPress={() => {
          onMenuToggle ? onMenuToggle() : {}
        }}
      >
        <View
          style={{
            ...DEFAULT_BUTTON_STYLE,
            ...style,
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button

const DEFAULT_BUTTON_STYLE = {
  backgroundColor: 'transparent',
  paddingVertical: 15,
  paddingHorizontal: 50,
  borderRadius: 30,
  borderWidth: 0,
}
