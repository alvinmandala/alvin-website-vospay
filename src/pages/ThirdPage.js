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

class ThirdPage extends Component<Props> {
  render() {
    let { windowWidth } = this.props
    let responsiveStyle
    if (windowWidth < 817) {
      responsiveStyle = mobileStyle
    } else if (windowWidth < 1128) {
      responsiveStyle = tabletStyle
    } else {
      responsiveStyle = webStyle
    }
    let { cardImage, cardTitle, cardContent } = cardData
    let {
      cardImageDefaultStyle,
      cardTextTitleDefaultStyle,
      cardTextContentDefaultStyle,
    } = responsiveStyle
    return (
      <BigWrapper
        color="#10253e"
        customStyle={responsiveStyle.thirdPageStyling}
      >
        <View style={responsiveStyle.headerWrapper}>
          <Text style={responsiveStyle.headerText}>
            Keuntungan Utama dari Vospay
          </Text>
        </View>
        <View style={responsiveStyle.contentWrapper}>
          {cardImage.map((item, index) => {
            return (
              <Card key={index}>
                <Image
                  source={cardImage[index]}
                  style={responsiveStyle.cardImageDefaultStyle}
                />
                <Text style={responsiveStyle.cardTextTitleDefaultStyle}>
                  {cardTitle[index]}
                </Text>
                <Text style={responsiveStyle.cardTextContentDefaultStyle}>
                  {cardContent[index]}
                </Text>
              </Card>
            )
          })}
        </View>
      </BigWrapper>
    )
  }
}

export default connect(ThirdPage)

const webStyle = StyleSheet.create({
  thirdPageStyling: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    paddingTop: 200,
    paddingBottom: 100,
  },
  headerText: {
    fontSize: 47,
    fontWeight: '800',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '87%',
    flexWrap: 'wrap',
    flex: 1,
  },
  cardImageDefaultStyle: {
    width: 85,
    height: 85,
  },
  cardTextTitleDefaultStyle: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: WHITE,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 15,
    width: 245,
  },
  cardTextContentDefaultStyle: {
    width: 220,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
  },
})

const tabletStyle = StyleSheet.create({
  thirdPageStyling: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  headerWrapper: {
    paddingTop: 100,
    paddingBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '800',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    flexWrap: 'wrap',
    flex: 1,
  },
  cardImageDefaultStyle: {
    width: 70,
    height: 70,
  },
  cardTextTitleDefaultStyle: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: WHITE,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    width: 245,
  },
  cardTextContentDefaultStyle: {
    width: 220,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 23,
  },
})

const mobileStyle = StyleSheet.create({
  thirdPageStyling: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerWrapper: {
    marginTop: 120,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    flexWrap: 'wrap',
    flex: 1,
  },
  cardImageDefaultStyle: {
    width: 60,
    height: 60,
  },
  cardTextTitleDefaultStyle: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: WHITE,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 12,
    width: 190,
  },
  cardTextContentDefaultStyle: {
    width: 170,
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 20,
  },
})

let cardData = {
  cardImage: [
    require('../images/three1.png'),
    require('../images/three2.png'),
    require('../images/three3.png'),
    require('../images/three4.png'),
  ],
  cardTitle: [
    'Pre-approved Credit Limit',
    'Seamless Payment Experience',
    'Multi Period Installments',
    'Competitive Interest Rate',
  ],
  cardContent: [
    'Setiap pengguna yang sudah memilikin akun Vospay telah diberikan limit kredit di depan, yang bisa langsung digunakan di………………',
    'Transaksi dapat dicicil dari beragam plihan tenor, dari 30 hari hingga 3, 6, 9, 12 bulan ',
    'TIDAK ada aplikasi yang perlu diajukan untuk pembayaran melalui Vospay. Pengguna hanya perlu melakukan aktivasi akun untuk pertama kali di depan',
    'Bunga yang diberikan untuk pengguna lebih kecil jika dibandingkan dengan bunga Kartu Kredit',
  ],
}
