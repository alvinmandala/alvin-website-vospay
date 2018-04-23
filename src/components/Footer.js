// @flow
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}

class Footer extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle = windowWidth < 725 ? mobileStyle : webStyle
    return (
      <View style={responsiveStyle.footerWrapper}>
        <View style={responsiveStyle.topSectionWrapper}>
          <View style={responsiveStyle.logoNameContentWrapper}>
            <View style={responsiveStyle.logoNameWrapper}>
              <Image
                source={require('../images/logo-white.png')}
                style={responsiveStyle.logoImage}
              />
              <Text style={responsiveStyle.logoName}>VOSPAY</Text>
            </View>
            <View>
              <Text style={responsiveStyle.textStyling}>
                nisi veniam nisi fore quis tempor cillum aute aliqua magna
                veniam quem quis anim cillum veniam veniam cillum tempor nisi
                tamen tempor summis sunt duis quorum culpa malis quis quis
              </Text>
            </View>
          </View>
          <View style={responsiveStyle.contactUsWrapper}>
            {data.contactUs.map((item, index) => {
              let header =
                index === 0 ? { ...responsiveStyle.contactUsHeader } : {}
              return (
                <Text
                  style={{
                    ...responsiveStyle.textStyling,
                    ...header,
                  }}
                >
                  {item}
                </Text>
              )
            })}
          </View>
          <View style={responsiveStyle.usefulLinksWrapper}>
            {data.usefulLinks.map((item, index) => {
              let bold =
                index === 0 ? { ...responsiveStyle.usefulLinksHeader } : {}
              return (
                <Text
                  style={{
                    ...responsiveStyle.textStyling,
                    marginBottom: 6,
                    ...bold,
                  }}
                >
                  {item}
                </Text>
              )
            })}
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text
                style={{
                  ...responsiveStyle.textStyling,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
              >
                Follow Us
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {data.followUsIcons.map((item, index) => {
                  return (
                    <Image
                      source={item}
                      style={responsiveStyle.followUsIconsImage}
                    />
                  )
                })}
              </View>
              <View>
                <Text
                  style={{
                    ...responsiveStyle.textStyling,
                    fontWeight: 'bold',
                    marginTop: 25,
                    marginBottom: 10,
                  }}
                >
                  We Accept
                </Text>
                <Text style={responsiveStyle.textStyling}>
                  PayPal, Payoneer, Skrill, Bitcoin, Master card, Visa Card
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={responsiveStyle.bottomSectionWrapper}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: DARK_BLUE }}>
              Copyright 2018, Vospay. All Right Reserved
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {data.legal.map(item => {
              return <Text style={responsiveStyle.legalText}>{item}</Text>
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default connect(Footer)

const webStyle = StyleSheet.create({
  footerWrapper: {
    height: '100%',
    backgroundColor: DARK_BLUE,
  },
  topSectionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 60,
    marginHorizontal: 100,
  },
  logoNameContentWrapper: {
    flex: 2,
    marginRight: 20,
  },
  logoNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  logoName: {
    fontSize: 22,
    color: WHITE,
    fontWeight: 'bold',
  },
  contactUsWrapper: {
    flex: 1,
    marginRight: 140,
  },
  contactUsHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  usefulLinksWrapper: {
    paddingRight: 80,
  },
  usefulLinksHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followUsIconsImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  bottomSectionWrapper: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    height: 80,
    alignItems: 'center',
    paddingLeft: 100,
    paddingRight: 40,
  },
  legalText: {
    marginRight: 30,
    color: DARK_BLUE,
  },
  textStyling: {
    color: WHITE,
    fontSize: 16,
  },
  smallTextStyling: {
    color: DARK_BLUE,
    fontSize: 13,
    lineHeight: 25,
  },
})

const mobileStyle = StyleSheet.create({
  footerWrapper: {
    height: '100%',
    backgroundColor: DARK_BLUE,
  },
  topSectionWrapper: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginVertical: 100,
    marginHorizontal: 20,
  },
  logoNameContentWrapper: {
    flex: 2,
    marginRight: 20,
  },
  logoNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  logoName: {
    fontSize: 22,
    color: WHITE,
    fontWeight: 'bold',
  },
  contactUsWrapper: {
    flex: 1,
    marginRight: 140,
  },
  contactUsHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  usefulLinksWrapper: {
    paddingRight: 80,
    flex: 1,
  },
  usefulLinksHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followUsIconsImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  bottomSectionWrapper: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    height: 80,
    alignItems: 'center',
    paddingLeft: 100,
    paddingRight: 40,
  },
  legalText: {
    marginRight: 30,
    color: DARK_BLUE,
  },
  textStyling: {
    color: WHITE,
    fontSize: 16,
  },
  smallTextStyling: {
    color: DARK_BLUE,
    fontSize: 13,
    lineHeight: 25,
  },
})

const data = {
  contactUs: [
    'Contact Us',
    'Jl. Scientia Boulevard, Gading Serpong, Curug Sangereng, Kelapa Dua, Curug',
    '123-098-123123',
    'vospay@gmail.com',
  ],
  usefulLinks: [
    'Useful Links',
    'About Us',
    'Our Service',
    'Our Team',
    'Testimonials',
    'Out Clients',
  ],
  followUsIcons: [
    require('../images/facebook-icon.png'),
    require('../images/facebook-icon.png'),
    require('../images/facebook-icon.png'),
    require('../images/facebook-icon.png'),
  ],
  legal: ['Legal', 'Terms & Conditions', 'Contact'],
}
