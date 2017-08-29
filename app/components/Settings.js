import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Settings.propTypes = {
  screenProps: PropTypes.object.isRequired
};

export default Settings;
