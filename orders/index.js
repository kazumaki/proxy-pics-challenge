/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import React from 'react';
import { NativeRouter } from 'react-router-native';

const Root = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <App />
      </NativeRouter>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
