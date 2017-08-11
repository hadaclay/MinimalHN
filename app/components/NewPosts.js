import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class NewPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'New'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>New Posts</Text>
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


export default NewPosts;
