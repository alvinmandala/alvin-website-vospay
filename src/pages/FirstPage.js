// @flow
import React, { Component } from 'react'
import Text from '../generals/core-ui/Text'
import { View, StyleSheet } from 'react-native'
import LoginBox from '../components/LoginBox.js'
import BGround from '../images/background-1.jpg'
import BigWrapper from '../generals/core-ui/BigWrapper'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}

class FirstPage extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle = windowWidth < 725 ? mobileStyle : webStyle
    return (
      <BigWrapper
        image={`url(${BGround})`}
        customStyle={responsiveStyle.firstPage}
      >
        <Text style={responsiveStyle.bigHeader}>
          <b>Your Payment Hero</b>
        </Text>
        <Text style={{ fontSize: 14 }}>The Ultimate Digital Credit Card</Text>
        <LoginBox />
        <Text style={{ fontSize: 14 }}>
          Belum aktivasi akun Vospay, <b>KLIK DI SINI</b>
        </Text>
      </BigWrapper>
    )
  }
}

export default connect(FirstPage)

const webStyle = StyleSheet.create({
  firstPage: {
    alignItems: 'center',
    paddingTop: 120,
    zIndex: -1,
    minHeight: '100%',
  },
  bigHeader: {
    fontSize: 60,
    margin: 25,
  },
})

const mobileStyle = StyleSheet.create({
  firstPage: {
    alignItems: 'center',
    paddingTop: 80,
    zIndex: -1,
  },
  bigHeader: {
    fontSize: 40,
    margin: 25,
  },
})
