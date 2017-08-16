import React from 'react';
import { WebView } from 'react-native';

const Login = () =>
  <WebView source={{ uri: 'https://news.ycombinator.com/login' }} />;

export default Login;
