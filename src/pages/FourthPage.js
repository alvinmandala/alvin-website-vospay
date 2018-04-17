// @flow
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'

type Props = {}

let style = {
  forthPageStyling: {
    height: 830,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    color: DARK_BLUE,
    fontSize: 25,
    fontWeight: '800',
    paddingBottom: 20,
  },
  contentImage: {
    width: 120,
    height: 60,
    marginHorizontal: 20,
  },
}

let data = {
  multiFinance: [
    require('../images/mpm.png'),
    require('../images/maybank.png'),
  ],
  onlinePartners: [
    require('../images/jdid.png'),
    require('../images/tokopedia.png'),
    require('../images/blibli.png'),
    require('../images/sociolla.png'),
    require('../images/thewatchco.png'),
    require('../images/tiket.png'),
  ],
}

class FourthPage extends Component<Props> {
  render() {
    return (
      <View style={style.forthPageStyling}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 47,
              fontWeight: '800',
              color: DARK_BLUE,
              marginBottom: 75,
            }}
          >
            Partner Kami
          </Text>
        </View>
        <View style={{ flexDirection: 'row', width: '95%' }}>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Text style={{ ...style.contentHeader, marginLeft: 80 }}>
              Multi Finance
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {data.multiFinance.map((item, index) => {
                return (
                  <Image key={index} source={item} style={style.contentImage} />
                )
              })}
            </View>
          </View>
          <View
            style={{ flex: 4, flexDirection: 'column', alignItems: 'center' }}
          >
            <View>
              <Text style={style.contentHeader}>Online Partner</Text>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              {data.onlinePartners.map((item, index) => {
                return (
                  <Image key={index} source={item} style={style.contentImage} />
                )
              })}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default FourthPage
