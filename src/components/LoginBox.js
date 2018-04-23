// @flow

import React, { Component } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { WHITE, DARK_BLUE, BLUE } from '../generals/constants/color'
import Text from '../generals/core-ui/Text'
import Button from '../generals/core-ui/Button'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}

class LoginBox extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle = windowWidth < 725 ? mobileStyle : webStyle
    return (
      <View style={responsiveStyle.loginBoxWrapper}>
        <Text style={responsiveStyle.loginText}>Log In</Text>
        <Text style={responsiveStyle.welcomeText}>
          Halo, selamat datang kembali di Vospay
        </Text>
        <Button style={responsiveStyle.loginEmailButton}>
          <Text style={responsiveStyle.loginEmailButtonText}>
            LOGIN DENGAN EMAIL / NO HP
          </Text>
        </Button>
        <Text>Atau</Text>
        <Button style={responsiveStyle.fbLoginButton}>
          <Image
            source={require('../images/fb-logo.png')}
            style={responsiveStyle.fbButtonIcon}
          />
          <Text style={responsiveStyle.fbLoginText}>LOGIN DENGAN FACEBOOK</Text>
        </Button>
        <View style={responsiveStyle.promptLogin}>
          <Text style={responsiveStyle.promptLoginText}>
            Belum mendaftar Dashboard Vospay?
          </Text>
          <Text style={responsiveStyle.promptLoginLink}>
            <b>DAFTAR DI SINI</b>
          </Text>
        </View>
      </View>
    )
  }
}

export default connect(LoginBox)

const webStyle = StyleSheet.create({
  loginBoxWrapper: {
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
  loginText: {
    fontSize: 30,
    margin: 15,
  },
  welcomeText: {
    fontSize: 16,
  },
  loginEmailButton: {
    backgroundColor: WHITE,
    marginTop: 30,
    marginBottom: 20,
  },
  loginEmailButtonText: {
    fontSize: 14,
    color: DARK_BLUE,
  },
  fbLoginButton: {
    backgroundColor: BLUE,
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  fbButtonIcon: {
    width: 22,
    height: 22,
    marginRight: 7,
  },
  fbLoginText: {
    fontSize: 14,
  },
  promptLogin: {
    marginBottom: 30,
  },
  promptLoginText: {
    marginBottom: 30,
  },
  promptLoginLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const mobileStyle = StyleSheet.create({
  loginBoxWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    margin: '50px 0 30px 0',
    paddingVertical: 5,
    paddingHorizontal: 35,
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 25,
    margin: 15,
  },
  welcomeText: {
    fontSize: 14,
  },
  loginEmailButton: {
    backgroundColor: WHITE,
    marginTop: 30,
    marginBottom: 20,
  },
  loginEmailButtonText: {
    fontSize: 12,
    color: DARK_BLUE,
  },
  fbLoginButton: {
    backgroundColor: BLUE,
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  fbButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 7,
  },
  fbLoginText: {
    fontSize: 12,
  },
  promptLogin: {
    marginBottom: 30,
  },
  promptLoginText: {
    marginBottom: 5,
    fontSize: 13,
  },
  promptLoginLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
