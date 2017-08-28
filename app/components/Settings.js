import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings'
  };

  render() {
    console.log(this.props.screenProps)
    return (
      <View style={styles.container}>
        <Text>Settings Page</Text>
        <CheckBox
          center
          title="Enable Ads"
          checked={this.props.screenProps.adsEnabled}
          onIconPress={this.props.screenProps.changeAds}
        />
      </View>
    );
  }
}

export default Settings;
