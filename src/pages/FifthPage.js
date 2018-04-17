// @flow
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'

type Props = {}

let style = {
  fifthPageStyling: {
    height: 830,
    backgroundColor: DARK_BLUE,
    flexDirection: 'column',
    alignItems: 'center',
  },
}

let bigCardData = {
  image: [require('../images/tito.png'), require('../images/lina.png')],
  name: ['TITO TAMBAYONG', 'LINA GEJALI'],
  position: [
    'Co-Founder, Chief Executive Officer',
    'Co-Founder, Chief Operating Officer',
  ],
}

let smallCardData = {
  image: [
    require('../images/abraham.png'),
    require('../images/cleosent.png'),
    require('../images/john.png'),
    require('../images/fendi.png'),
    require('../images/christopher.png'),
    require('../images/teddy.png'),
  ],
  name: [
    'ABRAHAM HIDAYAT',
    'CLEOSENT RANDING',
    'JOHN RASJID',
    'FENDI SANTOSO',
    'CHRISTOPHER MADIAM',
    'TEDDY KOENTJORO',
  ],
  position: [
    'Board Member',
    'Board Member',
    'Board Member',
    'Board Member',
    'Board Member',
    'Board Member',
  ],
}

let cardStyling = {
  bigImageStyle: {
    width: 150,
    height: 150,
  },
  smallImageStyle: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  nameStyle: {
    fontSize: 14,
    letterSpacing: 1.5,
    marginTop: 15,
    marginBottom: 15,
  },
  positionStyle: {
    fontSize: 15,
  },
}

class FifthPage extends Component<Props> {
  render() {
    return (
      <View style={style.fifthPageStyling}>
        <Text
          style={{
            fontSize: 14.5,
            marginTop: 120,
            width: 850,
            lineHeight: 30,
            textAlign: 'center',
          }}
        >
          Vospay adalah salah satu metode pembayaran yang dapat digunakan oleh
          nasabah Multi-finance untuk melakukan online transaksi di
          merchant-merchant online yang bekerjasama dengan Vospay
        </Text>
        <Text style={{ fontSize: 60, fontWeight: 'bold', marginTop: 40 }}>
          Team Kami
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 50,
            width: 550,
            justifyContent: 'space-between',
          }}
        >
          {bigCardData.image.map((item, index) => {
            let { image, name, position } = bigCardData
            return (
              <Card>
                <Image
                  source={image[index]}
                  style={cardStyling.bigImageStyle}
                />
                <Text style={cardStyling.nameStyle}>{name[index]}</Text>
                <Text style={cardStyling.positionStyle}>{position[index]}</Text>
              </Card>
            )
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          {smallCardData.image.map((item, index) => {
            let { image, name, position } = smallCardData
            return (
              <Card>
                <Image
                  source={image[index]}
                  style={cardStyling.smallImageStyle}
                />
                <Text style={cardStyling.nameStyle}>{name[index]}</Text>
                <Text style={cardStyling.positionStyle}>{position[index]}</Text>
              </Card>
            )
          })}
        </View>
        <View />
      </View>
    )
  }
}

export default FifthPage
