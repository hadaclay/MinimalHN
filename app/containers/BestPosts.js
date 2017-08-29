import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Posts from '../components/Posts';

class BestPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'Best'
  };

  render() {
    return (
      <Posts
        adsEnabled={this.props.screenProps.adsEnabled}
        filter="best"
        navigation={this.props.navigation}
      />
    );
  }
}

BestPosts.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default BestPosts;
