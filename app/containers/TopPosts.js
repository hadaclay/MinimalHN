import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Posts from '../components/Posts';

class TopPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top'
  };

  render() {
    return <Posts filter="top" />;
  }
}

export default TopPosts;
