import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Posts from '../components/Posts';

class BestPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Best'
  };

  render() {
    return <Posts filter="best" />;
  }
}

export default BestPosts;
