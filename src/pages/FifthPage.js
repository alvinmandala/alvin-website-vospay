// @flow
import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Card from '../components/Card'
import Text from '../generals/core-ui/Text'
import { WHITE, DARK_BLUE } from '../generals/constants/color'
import backGround from '../images/background-2.jpg'
import BigWrapper from '../generals/core-ui/BigWrapper'

type Props = {}

class FifthPage extends Component<Props> {
  render() {
    return (
      <BigWrapper
        image={`url(${backGround})`}
        customStyle={StyleSheet.flatten(styles.fifthPageStyling)}
      >
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
              <Card key={index}>
                <Image source={image[index]} style={styles.bigImageStyle} />
                <Text style={StyleSheet.flatten(styles.nameStyle)}>
                  {name[index]}
                </Text>
                <Text style={StyleSheet.flatten(styles.positionStyle)}>
                  {position[index]}
                </Text>
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
              <Card key={index}>
                <Image source={image[index]} style={styles.smallImageStyle} />
                <Text style={StyleSheet.flatten(styles.nameStyle)}>
                  {name[index]}
                </Text>
                <Text style={StyleSheet.flatten(styles.positionStyle)}>
                  {position[index]}
                </Text>
              </Card>
            )
          })}
        </View>
        <View />
      </BigWrapper>
    )
  }
}

export default FifthPage

const styles = StyleSheet.create({
  fifthPageStyling: {
    alignItems: 'center',
  },
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
})

const bigCardData = {
  image: [require('../images/five1.png'), require('../images/five2.png')],
  name: ['TITO TAMBAYONG', 'LINA GEJALI'],
  position: [
    'Co-Founder, Chief Executive Officer',
    'Co-Founder, Chief Operating Officer',
  ],
}

const smallCardData = {
  image: [
    require('../images/five3.png'),
    require('../images/five4.png'),
    require('../images/five5.png'),
    require('../images/five6.png'),
    require('../images/five7.png'),
    require('../images/five8.png'),
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
