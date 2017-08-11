import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class TopPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Top Posts</Text>
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


export default TopPosts;
