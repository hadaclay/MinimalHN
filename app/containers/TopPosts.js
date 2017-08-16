import React, { Component } from 'react';

import Posts from '../components/Posts';

class TopPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top'
  };

  render() {
    return <Posts filter="top" navigation={this.props.navigation} />;
  }
}

export default TopPosts;
