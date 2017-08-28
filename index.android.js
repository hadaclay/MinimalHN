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
    const adsEnabled =
      (await AsyncStorage.getItem('adsEnabled', value => JSON.parse(value))) ||
      false;
    this.setState({ adsEnabled });
    await AsyncStorage.setItem('adsEnabled', JSON.stringify(adsEnabled));

  }

  async changeAds() {
    const adsEnabled = await AsyncStorage.getItem('adsEnabled', value =>
      JSON.parse(value)
    );
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
