import React, { Component } from 'react';

import Posts from '../components/Posts';

class BestPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Best'
  };

  render() {
    return <Posts filter="best" navigation={this.props.navigation} />;
  }
}

export default BestPosts;
