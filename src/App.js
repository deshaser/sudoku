/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'

import Menu from './Menu/Menu'
import Board from './Board/Board'

export default class App extends Component {
  render() {
    return (
      <SideMenu
        menu={<Menu />}
        edgeHitWidth={100}
        disableGestures={false}
      >
        <Board />
      </SideMenu>
    );
  }
}
