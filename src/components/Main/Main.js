import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'

import Menu from '../Menu/Menu'
import Board from '../Board/Board'

const mapStateToProps = state => ({
  disableMenuGestures: state.board.showPalette,
})

class Main extends Component {
  render() {
    return (
      <SideMenu
        menu={<Menu />}
        edgeHitWidth={200}
        disableGestures={this.props.disableMenuGestures}
      >
        <Board />
      </SideMenu>
    );
  }
}

export default connect(
  mapStateToProps
)(Main)
