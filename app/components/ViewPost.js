import React from 'react';
import { WebView } from 'react-native';

const ViewPost = props => {
  const { params } = props.navigation.state;
  return (
    <WebView source={{uri: params.url}} />
  );
}

export default ViewPost;
