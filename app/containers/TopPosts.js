import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Posts from '../components/Posts';

class TopPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top'
  };

  render() {
    return <Posts filter="top" navigation={this.props.navigation} />;
  }
}

TopPosts.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default TopPosts;
