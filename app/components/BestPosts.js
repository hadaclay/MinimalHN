import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BestPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Best'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Best Posts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});


export default BestPosts;
