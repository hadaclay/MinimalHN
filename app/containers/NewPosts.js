import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Posts from '../components/Posts';

class NewPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'New'
  };

  render() {
    return (
      <Posts
        adsEnabled={this.props.screenProps.adsEnabled}
        filter="new"
        navigation={this.props.navigation}
      />
    );
  }
}

NewPosts.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default NewPosts;
