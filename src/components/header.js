// @flow
import React, { Component } from 'react'
import Link from 'gatsby-link'
import { View, Image, StyleSheet } from 'react-native'
import Text from '../generals/core-ui/Text.js'
import UnorderedList from '../generals/core-ui/UnorderedList'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}
class Header extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle = windowWidth < 725 ? mobileStyle : webStyle
    return (
      <View style={responsiveStyle.headerWrapperStyle}>
        <View style={responsiveStyle.logoAndNameStyle}>
          <Image
            source={require('../images/logo-white.png')}
            style={responsiveStyle.logoStyle}
          />
          <Text style={responsiveStyle.nameStyle}>VOSPAY</Text>
        </View>
        <View style={responsiveStyle.navListStyle}>
          <UnorderedList
            ulStyle={responsiveStyle.ulStyle}
            liStyle={responsiveStyle.liStyle}
            arrayContent={['TENTANG KAMI', 'CARA PAKAI', 'FAQ', 'HUBUNGI KAMI']}
          />
        </View>
      </View>
    )
  }
}

export default connect(Header)

const webStyle = StyleSheet.create({
  headerWrapperStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    justifyContent: 'space-between',
    height: 70,
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  logoAndNameStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  logoStyle: {
    width: 35,
    height: 35,
    margin: 10,
  },
  nameStyle: {
    fontSize: 22,
  },
  navListStyle: {
    flex: 0,
    justifyContent: 'center',
  },
  ulStyle: {},
  liStyle: {
    fontSize: 16,
    padding: 25,
    fontWeight: 'lighter',
  },
})

const mobileStyle = StyleSheet.create({
  headerWrapperStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    justifyContent: 'space-between',
    height: 70,
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  logoAndNameStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  logoStyle: {
    width: 25,
    height: 25,
    margin: 5,
  },
  nameStyle: {
    fontSize: 18,
  },
  navListStyle: {
    flex: 0,
    justifyContent: 'center',
  },
  ulStyle: {},
  liStyle: {
    fontSize: 13,
    padding: '25px 4px',
    fontWeight: 'lighter',
  },
})
