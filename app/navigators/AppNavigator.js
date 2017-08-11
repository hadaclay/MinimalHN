import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import BestPosts from '../components/BestPosts';
import TopPosts from '../components/TopPosts';
import NewPosts from '../components/NewPosts';
import Settings from '../components/Settings';

const Nav = TabNavigator(
  {
    Best: { screen: BestPosts },
    Top: { screen: TopPosts },
    New: { screen: NewPosts }
  },
  {
    initialRouteName: 'Best',
    tabBarOptions: {
      style: {
        backgroundColor: '#ff6600'
      }
    }
  }
);

class AppNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ff6600" />
        <Nav />
      </View>
    );
  }
}

export default AppNavigator;
