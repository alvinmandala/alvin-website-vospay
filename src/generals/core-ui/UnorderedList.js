// @flow
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { WHITE, DARK_BLUE } from '../constants/color'

type Props = {
  ulStyle?: number | Object,
  liStyle?: number | Object,
  arrayContent: Array<mixed>,
}

type State = {
  onHoverIndex: number | null,
}

let DEFAULT_STYLE_FOR_UL = {
  listStyle: 'none',
  flexDirection: 'row',
  display: 'flex',
  flex: 1,
  margin: 0,
}

const DEFAULT_STYLE_FOR_LI = {
  color: WHITE,
}

class UnorderedList extends Component<Props, State> {
  state = {
    onHoverIndex: null,
  }

  _onHover = (index: number | null) => {
    this.setState({ onHoverIndex: index })
  }

  render() {
    let { ulStyle, liStyle, arrayContent } = this.props
    ulStyle =
      typeof ulStyle === 'number' ? StyleSheet.flatten(ulStyle) : ulStyle
    liStyle =
      typeof liStyle === 'number' ? StyleSheet.flatten(liStyle) : liStyle
    return (
      <ul style={{ ...DEFAULT_STYLE_FOR_UL, ...ulStyle }}>
        {arrayContent.map((item, index) => {
          let onHoverStyle = {}
          if (index === this.state.onHoverIndex) {
            onHoverStyle = {
              backgroundColor: '#3c3c3c',
              color: WHITE,
              cursor: 'pointer',
            }
          }
          return (
            <li
              onMouseEnter={() => this._onHover(index)}
              onMouseLeave={() => this._onHover(null)}
              key={index}
              style={{ ...DEFAULT_STYLE_FOR_LI, ...liStyle, ...onHoverStyle }}
            >
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default UnorderedList
