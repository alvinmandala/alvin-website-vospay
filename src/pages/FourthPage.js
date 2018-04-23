// @flow
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Card from '../components/Card'
import BigWrapper from '../generals/core-ui/BigWrapper'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}

class FourthPage extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle = windowWidth < 725 ? mobileStyle : webStyle
    return (
      <BigWrapper color={WHITE} customStyle={responsiveStyle.forthPageWrapper}>
        <View style={responsiveStyle.headerWrapper}>
          <Text style={responsiveStyle.headerText}>Partner Kami</Text>
        </View>
        <View style={responsiveStyle.contentWrapper}>
          <View style={responsiveStyle.multiFinanceWrapper}>
            <Text style={responsiveStyle.contentHeaderText}>Multi Finance</Text>
            <View style={responsiveStyle.multiFinanceContentWrapper}>
              {data.multiFinance.map((item, index) => {
                return (
                  <View style={responsiveStyle.contentImageWrapper}>
                    <Image
                      key={index}
                      source={item}
                      style={responsiveStyle.contentImageStyling}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View style={responsiveStyle.onlinePartnerWrapper}>
            <View>
              <Text style={responsiveStyle.contentHeaderText}>
                Online Partner
              </Text>
            </View>
            <View style={responsiveStyle.onlinePartnerContentWrapper}>
              {data.onlinePartners.map((item, index) => {
                return (
                  <View style={responsiveStyle.contentImageWrapper}>
                    <Image
                      key={index}
                      source={item}
                      style={responsiveStyle.contentImageStyling}
                    />
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </BigWrapper>
    )
  }
}

export default connect(FourthPage)

const webStyle = StyleSheet.create({
  forthPageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 47,
    fontWeight: '600',
    color: DARK_BLUE,
    marginBottom: 50,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    flexWrap: 'wrap',
  },
  multiFinanceWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  multiFinanceContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlinePartnerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  onlinePartnerContentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contentHeaderText: {
    color: DARK_BLUE,
    fontSize: 23,
    letterSpacing: 3,
    fontWeight: '800',
    paddingBottom: 20,
  },
  contentImageWrapper: {
    borderWidth: 2,
    borderColor: '#a5a5a5',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 3,
    marginBottom: 6,
  },
  contentImageStyling: {
    width: 150,
    height: 75,
  },
})

const mobileStyle = StyleSheet.create({
  forthPageWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 100,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    color: DARK_BLUE,
    marginBottom: 50,
  },
  contentWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    flexWrap: 'wrap',
  },
  multiFinanceWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 70,
  },
  multiFinanceContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlinePartnerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  onlinePartnerContentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contentHeaderText: {
    color: DARK_BLUE,
    fontSize: 18,
    letterSpacing: 3,
    fontWeight: '800',
    paddingBottom: 20,
  },
  contentImageWrapper: {
    borderWidth: 2,
    borderColor: '#a5a5a5',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    marginBottom: 6,
  },
  contentImageStyling: {
    width: 100,
    height: 50,
  },
})

const data = {
  multiFinance: [
    require('../images/four-1.png'),
    require('../images/four-2.png'),
  ],
  onlinePartners: [
    require('../images/four-3.png'),
    require('../images/four-4.png'),
    require('../images/four-5.png'),
    require('../images/four-6.png'),
    require('../images/four-7.png'),
    require('../images/four-8.png'),
  ],
}
