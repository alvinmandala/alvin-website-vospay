// @flow
import React, { Component } from 'react'
import { WHITE, DARK_BLUE } from '../constants/color'

type Props = {
  ulStyle?: Object,
  liStyle?: Object,
  arrayContent: Array<any>,
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

let DEFAULT_STYLE_FOR_LI = {
  color: WHITE,
}

class UnorderedList extends Component<Props, State> {
  // state = {
  //   onHoverIndex: null,
  // }
  //
  // _onHover = (index: number | null) => {
  //   this.setState({ onHoverIndex: index })
  // }

  render() {
    let { ulStyle, liStyle, arrayContent } = this.props
    return (
      <ul style={{ ...DEFAULT_STYLE_FOR_UL, ...ulStyle }}>
        {arrayContent.map((item, index) => {
          // let onHoverStyle
          // if (index === this.state.onHoverIndex) {
          //   onHoverStyle = {
          //     backgroundColor: 'white',
          //     color: DARK_BLUE,
          //     cursor: 'pointer',
          //   }
          // }
          return (
            <li
              // onMouseEnter={() => this._onHover(index)}
              // onMouseLeave={() => this._onHover(null)}
              key={index}
              style={{ ...DEFAULT_STYLE_FOR_LI, ...liStyle }}
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
