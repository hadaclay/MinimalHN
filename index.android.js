import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './app/navigators/AppNavigator';

class HackerNewsReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Remember to set this back to false by default after testing
      adsEnabled: true
    };
  }

  render() {
    return <AppNavigator adsEnabled={this.state.adsEnabled} />;
  }
}

AppRegistry.registerComponent('HackerNewsReact', () => HackerNewsReact);
