import React, { Component } from 'react';

import Posts from '../components/Posts';

class NewPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'New'
  };

  render() {
    return <Posts filter="new" navigation={this.props.navigation} />;
  }
}

export default NewPosts;
