import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import BestPosts from '../containers/BestPosts';
import TopPosts from '../containers/TopPosts';
import NewPosts from '../containers/NewPosts';
import Settings from '../components/Settings';

const TabNav = TabNavigator(
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

const DrawerNav = DrawerNavigator(
  {
    Posts: {
      path: '/',
      screen: TabNav
    },
    Settings: {
      path: '/settings',
      screen: Settings
    }
  },
  {
    initialRouteName: 'Posts',
    contentOptions: {
      activeBackgroundColor: '#ff6600',
      activeTintColor: '#f5fcff'
    }
  }
);

class AppNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ff6600" />
        <DrawerNav />
      </View>
    );
  }
}

export default AppNavigator;
