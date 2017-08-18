import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';

const ViewPost = props => {
  const { params } = props.navigation.state;
  return <WebView source={{ uri: params.url }} />;
};

ViewPost.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ViewPost;
