import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './app/navigators/AppNavigator';

const HackerNewsReact = () => <AppNavigator />;

AppRegistry.registerComponent('HackerNewsReact', () => HackerNewsReact);
