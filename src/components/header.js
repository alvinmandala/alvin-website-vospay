// @flow
import React, { Component } from 'react'
import Link from 'gatsby-link'
import { View, Image, StyleSheet } from 'react-native'
import Text from '../generals/core-ui/Text.js'
import UnorderedList from '../generals/core-ui/UnorderedList'
import connect from '../generals/connect'
import Button from '../generals/core-ui/Button'

type Props = {
  windowWidth: number,
}

type State = {
  isActiveMenu: boolean,
}

class Header extends Component<Props, State> {
  state = {
    isActiveMenu: false,
  }

  _onMenuToggle = () => {
    this.setState({ isActiveMenu: !this.state.isActiveMenu })
  }

  render() {
    let { windowWidth } = this.props
    let { isActiveMenu } = this.state
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
          <Button
            style={responsiveStyle.menuButton}
            onMenuToggle={this._onMenuToggle}
          >
            <Text>MENU</Text>
          </Button>
          <UnorderedList
            ulStyle={
              windowWidth < 725
                ? isActiveMenu
                  ? mobileStyle.ulStyle
                  : { display: 'none' }
                : webStyle.ulStyle
            }
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
  menuButton: {
    display: 'none',
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
    position: 'absolute',
    width: '100vw',
  },
  menuButton: {
    marginVertical: 14,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  ulStyle: {
    position: 'absolute',
    top: 70,
    flexDirection: 'column',
    padding: 0,
    backgroundColor: 'grey',
  },
  liStyle: {
    fontSize: 13,
    display: 'flex',
    width: '100vw',
    flexDirection: 'row',
    fontWeight: 'lighter',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderBottomStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
