// @flow

import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { WHITE, DARK_BLUE, BLUE } from '../generals/constants/color'
import Text from '../generals/core-ui/Text'
import Button from '../generals/core-ui/Button'

type Props = {}

let style = {
  loginBox: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 20,
    margin: '50px 0 30px 0',
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
}

class LoginBox extends Component<Props> {
  render() {
    return (
      <View style={style.loginBox}>
        <Text style={{ fontSize: 30, margin: 15 }}>Log In</Text>
        <Text style={{ fontSize: 16 }}>
          Halo, selamat datang kembali di Vospay
        </Text>
        <Button
          style={{ backgroundColor: WHITE, marginTop: 30, marginBottom: 20 }}
        >
          <Text style={{ fontSize: 14, color: DARK_BLUE }}>
            LOGIN DENGAN EMAIL / NO HP
          </Text>
        </Button>
        <Text>Atau</Text>
        <Button
          style={{
            backgroundColor: BLUE,
            marginTop: 20,
            marginBottom: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Image
            source={require('../images/fb-logo.png')}
            style={{ width: 22, height: 22, marginRight: 7 }}
          />
          <Text style={{ fontSize: 14 }}>LOGIN DENGAN FACEBOOK</Text>
        </Button>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ marginBottom: 7 }}>
            Belum mendaftar Dashboard Vospay?
          </Text>
          <Text
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <b>DAFTAR DI SINI</b>
          </Text>
        </View>
      </View>
    )
  }
}

export default LoginBox
