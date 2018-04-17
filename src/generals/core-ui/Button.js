// @flow

import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { WHITE } from '../constants/color'
import Text from './Text'

type Props = {
  style?: Object,
  children?: mixed,
}

let DEFAULT_BUTTON_STYLE = {
  backgroundColor: 'transparent',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 50,
  paddingRight: 50,
  borderRadius: 30,
  borderWidth: 0,
}

class Button extends Component<Props> {
  render() {
    let { style, children } = this.props
    return (
      <TouchableOpacity>
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
