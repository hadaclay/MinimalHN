import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Posts from '../components/Posts';

class NewPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'New'
  };

  render() {
    return <Posts filter="new" />;
  }
}

export default NewPosts;
