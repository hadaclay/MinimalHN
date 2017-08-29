import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';

import AppNavigator from './app/navigators/AppNavigator';

class HackerNewsReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Ads disabled by default
      adsEnabled: false
    };

    this.changeAds = this.changeAds.bind(this);
  }

  async componentDidMount() {
    let adsEnabled = await AsyncStorage.getItem('adsEnabled');
    adsEnabled = JSON.parse(adsEnabled);

    this.setState({ adsEnabled: JSON.parse(adsEnabled) });
    await AsyncStorage.setItem('adsEnabled', JSON.stringify(adsEnabled));
  }

  async changeAds() {
    let adsEnabled = await AsyncStorage.getItem('adsEnabled');
    adsEnabled = JSON.parse(adsEnabled);

    this.setState({ adsEnabled: !adsEnabled });
    await AsyncStorage.setItem('adsEnabled', JSON.stringify(!adsEnabled));
  }

  render() {
    return (
      <AppNavigator
        adsEnabled={this.state.adsEnabled}
        changeAds={this.changeAds}
      />
    );
  }
}

AppRegistry.registerComponent('HackerNewsReact', () => HackerNewsReact);
