// @flow

import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { WHITE, DARK_BLUE, BLUE } from '../generals/constants/color'
import Text from '../generals/core-ui/Text'

type Props = {
  children: React$Node,
}

class Card extends Component<Props> {
  render() {
    let { children } = this.props
    return <View style={{ alignItems: 'center' }}>{children}</View>
  }
}

export default Card
