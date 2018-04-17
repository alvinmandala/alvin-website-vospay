// @flow
import React, { Component } from 'react'
import Text from '../generals/core-ui/Text'
import { View } from 'react-native'
import LoginBox from '../components/LoginBox.js'
import BGround from '../images/background1.jpg'

let style = {
  firstPage: {
    height: 840,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${BGround})`,
    top: -70,
    paddingTop: 120,
    zIndex: -1,
  },
}

type Props = {}

class FirstPage extends Component<Props> {
  render() {
    return (
      <View style={style.firstPage}>
        <Text style={{ fontSize: 60, margin: 25 }}>
          <b>Your Payment Hero</b>
        </Text>
        <Text style={{ fontSize: 14 }}>The Ultimate Digital Credit Card</Text>
        <LoginBox />
        <Text style={{ fontSize: 14 }}>
          Belum aktivasi akun Vospay, <b>KLIK DI SINI</b>
        </Text>
      </View>
    )
  }
}

export default FirstPage
