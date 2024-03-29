// @flow
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'
import BigWrapper from '../generals/core-ui/BigWrapper'
import connect from '../generals/connect'

type Props = {
  windowWidth: number,
}

class SecondPage extends Component<Props> {
  render() {
    let { cardImage, cardTitle, cardContent } = cardData
    let { windowWidth } = this.props
    let responsiveStyle
    if (windowWidth < 600) {
      responsiveStyle = mobileStyle
    } else if (windowWidth < 1267) {
      responsiveStyle = tabletStyle
    } else {
      responsiveStyle = webStyle
    }
    return (
      <BigWrapper color={WHITE} customStyle={responsiveStyle.secondPage}>
        <View style={responsiveStyle.headerWrapper}>
          <Text style={responsiveStyle.headerText}>
            <b>Cara Menggunakan Vospay sebagai Sarana Pembayaran Online</b>
          </Text>
        </View>
        <View style={responsiveStyle.contentWrapper}>
          {cardTitle.map((item, index) => {
            // let link = ''
            // if (index === 0) {
            //   link = <b>KLIK DI SINI</b>
            // }
            let arrow = index < 2 ? true : false
            return (
              <Card
                arrow={arrow}
                key={index}
                arrowImageStyling={responsiveStyle.arrowImageStyling}
              >
                <Image
                  source={cardImage[index]}
                  style={responsiveStyle.cardImageDefaultStyle}
                />
                <Text style={responsiveStyle.cardTextTitleDefaultStyle}>
                  {cardTitle[index]}
                </Text>
                <Text style={responsiveStyle.cardTextContentDefaultStyle}>
                  {cardContent[index]}
                  {/* {link} */}
                </Text>
              </Card>
            )
          })}
        </View>
      </BigWrapper>
    )
  }
}

export default connect(SecondPage)

const webStyle = StyleSheet.create({
  secondPage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerWrapper: {
    paddingBottom: 60,
  },
  headerText: {
    color: DARK_BLUE,
    fontSize: 45,
    textAlign: 'center',
    width: 755,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },
  cardImageDefaultStyle: {
    width: 90,
    height: 90,
  },
  cardTextTitleDefaultStyle: {
    color: DARK_BLUE,
    fontSize: 26,
    fontWeight: '550',
    marginTop: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  cardTextContentDefaultStyle: {
    color: DARK_BLUE,
    width: 197,
    textAlign: 'center',
    lineHeight: 23,
    fontSize: 15,
  },
  arrowImageStyling: {
    alignSelf: 'center',
    marginBottom: 60,
    width: 270,
    height: 20,
    marginRight: -90,
    marginLeft: -20,
  },
})

const tabletStyle = StyleSheet.create({
  secondPage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerWrapper: {
    paddingBottom: 60,
  },
  headerText: {
    color: DARK_BLUE,
    fontSize: 30,
    textAlign: 'center',
    width: 500,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '87%',
  },
  cardImageDefaultStyle: {
    width: 65,
    height: 65,
  },
  cardTextTitleDefaultStyle: {
    color: DARK_BLUE,
    fontSize: 18,
    fontWeight: '550',
    marginTop: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  cardTextContentDefaultStyle: {
    color: DARK_BLUE,
    width: 180,
    textAlign: 'center',
    lineHeight: 23,
    fontSize: 12,
  },
  arrowImageStyling: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    width: '90%',
    height: 20,
    marginHorizontal: 'auto',
    display: 'none',
  },
})

const mobileStyle = StyleSheet.create({
  secondPage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    height: '100vh',
  },
  headerWrapper: {
    paddingBottom: 60,
  },
  headerText: {
    color: DARK_BLUE,
    fontSize: 15,
    textAlign: 'center',
    width: 335,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
  },
  cardImageDefaultStyle: {
    width: 35,
    height: 35,
  },
  cardTextTitleDefaultStyle: {
    color: DARK_BLUE,
    fontSize: 13,
    fontWeight: '550',
    marginTop: 15,
    marginBottom: 30,
    textAlign: 'center',
  },
  cardTextContentDefaultStyle: {
    color: DARK_BLUE,
    width: 90,
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 9,
  },
  arrowImageStyling: {
    alignSelf: 'center',
    marginBottom: 120,
    width: 35,
    height: 20,
    marginRight: -90,
  },
})

let cardData = {
  cardImage: [
    require('../images/two1.png'),
    require('../images/two2.png'),
    require('../images/two3.png'),
  ],
  cardTitle: ['Aktivasi', 'Beli', 'Bayar'],
  cardContent: [
    'Aktivasi akun Vospay yang sudah diberikan fasilitas limit kredit',
    'Checkout di merchant-merchant online partner dengan klik Vospay',
    'Pembayaran dilakukan langsung ke Multi-finance terkait sesuai pilihan cici-lan: 30 hari, 3, 6, 9, 12 bulan',
  ],
}
