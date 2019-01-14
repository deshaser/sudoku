/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import Main from './components/Main/Main'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
