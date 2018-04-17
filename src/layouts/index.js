// @flow
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import FifthPage from '../pages/FifthPage'
import './index.css'
import { ScrollView, View } from 'react-native'
import Header from '../components/header'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'
import FourthPage from '../pages/FourthPage'

const Layout = ({ children, data }: Object) => (
  <View
    style={{
      flex: 1,
    }}
  >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <ScrollView>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </ScrollView>
  </View>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
