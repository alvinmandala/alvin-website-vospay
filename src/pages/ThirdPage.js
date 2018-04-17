// @flow
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'

type Props = {}

const style = {
  thirdPageStyling: {
    backgroundColor: '#10253e',
    display: 'flex',
    height: 830,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 335,
  },
}

const cardStyle = {
  cardImageDefaultStyle: {
    width: 60,
    height: 60,
  },
  cardTextTitleDefaultStyle: {
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: WHITE,
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
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
}

let cardData = {
  cardImage: [
    require('../images/card.png'),
    require('../images/calendar.png'),
    require('../images/blue-finger.png'),
    require('../images/percentage.png'),
  ],
  cardTitle: [
    'Pre-approved Credit Limit',
    'Multi Period Installments',
    'Seamless Payment Experience',
    'Competitive Interest Rate',
  ],
  cardContent: [
    'Setiap pengguna yang sudah memilikin akun Vospay telah diberikan limit kredit di depan, yang bisa langsung digunakan di………………',
    'Transaksi dapat dicicil dari beragam plihan tenor, dari 30 hari hingga 3, 6, 9, 12 bulan ',
    'TIDAK ada aplikasi yang perlu diajukan untuk pembayaran melalui Vospay. Pengguna hanya perlu melakukan aktivasi akun untuk pertama kali di depan',
    'Bunga yang diberikan untuk pengguna lebih kecil jika dibandingkan dengan bunga Kartu Kredit',
  ],
}

class ThirdPage extends Component<Props> {
  render() {
    let { cardImage, cardTitle, cardContent } = cardData
    let {
      cardImageDefaultStyle,
      cardTextTitleDefaultStyle,
      cardTextContentDefaultStyle,
    } = cardStyle
    return (
      <View style={style.thirdPageStyling}>
        <View style={{ flex: 1, paddingTop: 185 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '800',
            }}
          >
            Keuntungan Utama dari Vospay
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '87%',
            flex: 1,
          }}
        >
          {cardImage.map((item, index) => {
            return (
              <Card>
                <Image
                  source={cardImage[index]}
                  style={cardImageDefaultStyle}
                />
                <Text style={cardTextTitleDefaultStyle}>
                  {cardTitle[index]}
                </Text>
                <Text style={cardTextContentDefaultStyle}>
                  {cardContent[index]}
                </Text>
              </Card>
            )
          })}
        </View>
      </View>
    )
  }
}

export default ThirdPage
