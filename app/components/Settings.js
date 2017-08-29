import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Linking } from 'react-native';
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
        <Text style={{ fontSize: 13 }}>
          If you would like to support the developer, please enable ads!
        </Text>
        <CheckBox
          center
          title="Enable Ads"
          checked={this.props.screenProps.adsEnabled}
          onPress={this.props.screenProps.changeAds}
          onIconPress={this.props.screenProps.changeAds}
          checkedColor="#ff6600"
        />
        <Text style={{ paddingTop: 200, fontSize: 15 }}>
          Made by{' '}
          <Text
            style={{ color: '#ff6600' }}
            onPress={() => Linking.openURL('https://hadaclay.com')}
          >
            @hadaclay
          </Text>
        </Text>
      </View>
    );
  }
}

Settings.propTypes = {
  screenProps: PropTypes.object.isRequired
};

export default Settings;
