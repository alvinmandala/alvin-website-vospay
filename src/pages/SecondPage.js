// @flow
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'

type Props = {}

let style = {
  secondPage: {
    backgroundColor: WHITE,
    display: 'flex',
    height: 760,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  header: {
    color: DARK_BLUE,
    fontSize: 40,
    textAlign: 'center',
    width: 679,
  },
}

let cardStyle = {
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
}

let cardData = {
  cardImage: [
    require('../images/finger.png'),
    require('../images/cart.png'),
    require('../images/blue-calendar.png'),
  ],
  cardTitle: ['Aktivasi', 'Beli', 'Bayar'],
  cardContent: [
    'Aktivasi akun Vospay yang sudah diberikan fasilitas limit kredit \n \n Jika Anda belum aktivasi akun Vospay, ',
    'Checkout di merchant-merchant online partner dengan klik Vospay',
    'Pembayaran dilakukan langsung ke Multi-finance terkait sesuai pilihan cici-lan: 30 hari, 3, 6, 9, 12 bulan',
  ],
}

class SecondPage extends Component<Props> {
  render() {
    let { cardImage, cardTitle, cardContent } = cardData
    return (
      <View style={style.secondPage}>
        <View style={{ paddingBottom: 60 }}>
          <Text style={style.header}>
            <b>Cara Menggunakan Vospay sebagai Sarana Pembayaran Online</b>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '75%',
          }}
        >
          {cardTitle.map((item, index) => {
            let link = ''
            if (index === 0) {
              link = <b>KLIK DI SINI</b>
            }
            return (
              <Card>
                <Image
                  source={cardImage[index]}
                  style={cardStyle.cardImageDefaultStyle}
                />
                <Text style={cardStyle.cardTextTitleDefaultStyle}>
                  {cardTitle[index]}
                </Text>
                <Text style={cardStyle.cardTextContentDefaultStyle}>
                  {cardContent[index]}
                  {link}
                </Text>
              </Card>
            )
          })}
        </View>
      </View>
    )
  }
}

export default SecondPage
