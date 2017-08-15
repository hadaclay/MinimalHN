import React, { Component } from 'react';
import { WebView } from 'react-native';

class Login extends Component {
  render() {
    return <WebView source={{ uri: 'https://news.ycombinator.com/login' }} />;
  }
}

export default Login;
