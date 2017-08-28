import React from 'react';
import { StatusBar, View } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BestPosts from '../containers/BestPosts';
import TopPosts from '../containers/TopPosts';
import NewPosts from '../containers/NewPosts';
import PostComments from '../components/PostComments';
import Settings from '../components/Settings';
import ViewPost from '../components/ViewPost';

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
      screen: TabNav,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#eeeeee',
        headerStyle: {
          backgroundColor: '#ff6600',
          elevation: 0,
          paddingLeft: 10
        },
        title: 'Posts',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            color="#eee"
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        )
      })
    },
    Settings: {
      path: '/settings',
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        headerTintColor: '#eeeeee',
        headerStyle: { backgroundColor: '#ff6600' },
        title: 'Settings',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            color="#eee"
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        )
      })
    }
  },
  {
    initialRouteName: 'Posts',
    contentOptions: {
      activeBackgroundColor: '#ff6600',
      activeTintColor: '#f5fcff'
    },
    tabBarOptions: {
      activeTintColor: '#ff6600'
    }
  }
);

const RootNav = StackNavigator(
  {
    Drawer: {
      screen: DrawerNav,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#ff6600',
          elevation: 0,
          paddingLeft: 10
        }
      }
    },
    Comments: {
      screen: PostComments,
      navigationOptions: {
        headerTintColor: '#eeeeee',
        headerStyle: {
          backgroundColor: '#ff6600'
        }
      }
    },
    ViewPost: {
      screen: ViewPost,
      navigationOptions: {
        headerTintColor: '#eeeeee',
        headerStyle: {
          backgroundColor: '#ff6600',
          paddingRight: 10
        }
      }
    }
  },
  {
    initialRouteName: 'Drawer'
  }
);

const AppNavigator = props =>
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#ff6600" />
    <RootNav
      screenProps={{ adsEnabled: props.adsEnabled, changeAds: props.changeAds }}
    />
  </View>;

export default AppNavigator;
