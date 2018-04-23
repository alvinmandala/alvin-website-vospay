// @flow

import React, { Component } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { WHITE, DARK_BLUE, BLUE } from '../generals/constants/color'
import Text from '../generals/core-ui/Text'

type Props = {
  children: React$Node,
  arrow?: boolean,
  arrowImageStyling?: number | Object,
}

class Card extends Component<Props> {
  render() {
    let { children, arrow, arrowImageStyling } = this.props
    arrowImageStyling =
      typeof arrowImageStyling === 'number'
        ? StyleSheet.flatten(arrowImageStyling)
        : arrowImageStyling
    arrow = arrow && (
      <Image
        style={arrowImageStyling}
        resizeMode="stretch"
        source={require('../images/arrow.png')}
      />
    )
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'center' }}>{children}</View>
        {arrow}
      </View>
    )
  }
}

export default Card
