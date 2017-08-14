import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Page</Text>
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

export default Settings;
