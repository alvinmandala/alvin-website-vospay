// @flow
import React, { Component } from 'react'
import Link from 'gatsby-link'
import { View, Image } from 'react-native'
import Text from '../generals/core-ui/Text.js'
import UnorderedList from '../generals/core-ui/UnorderedList'

type Props = {}
type State = Object

let style = {
  headerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'sticky',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    justifyContent: 'space-between',
    height: 70,
    top: 0,
    zIndex: 2,
  },
  logoAndNameStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  navListStyle: {
    flex: 0,
    justifyContent: 'center',
  },
}

class Header extends Component<Props, State> {
  render() {
    return (
      <View style={style.headerStyle}>
        <View style={style.logoAndNameStyle}>
          <Image
            source={require('../images/logo.png')}
            style={{ width: 35, height: 35, margin: 10 }}
          />
          <Text style={{ fontSize: 22 }}>VOSPAY</Text>
        </View>
        <View style={style.navListStyle}>
          <UnorderedList
            ulStyle={{}}
            liStyle={{
              fontSize: 16,
              padding: 25,
              fontWeight: 'lighter',
            }}
            arrayContent={['TENTANG KAMI', 'CARA PAKAI', 'FAQ', 'HUBUNGI KAMI']}
          />
        </View>
      </View>
    )
  }
}

export default Header
