import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

import BestPosts from '../containers/BestPosts';
import TopPosts from '../containers/TopPosts';
import NewPosts from '../containers/NewPosts';
import PostComments from '../components/PostComments';
import Settings from '../components/Settings';
import Login from '../components/Login';

const TabNav = TabNavigator(
  {
    Top: { screen: TopPosts },
    Best: { screen: BestPosts },
    New: { screen: NewPosts }
  },
  {
    initialRouteName: 'Top',
    lazy: true,
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
    },
    Login: {
      path: '/login',
      screen: Login
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

const RootNav = StackNavigator(
  {
    Drawer: { screen: DrawerNav },
    Comments: { screen: PostComments }
  },
  {
    initialRouteName: 'Drawer'
  }
);

class AppNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: -60 }}>
        <StatusBar backgroundColor="#ff6600" />
        <RootNav />
      </View>
    );
  }
}

export default AppNavigator;
