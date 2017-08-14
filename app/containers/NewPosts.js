import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Posts from '../components/Posts';

class NewPosts extends Component {
  static navigationOptions = {
    tabBarLabel: 'New'
  };

  constructor(props) {
    super(props);
    this.state = {
      postIDs: []
    };

    this.setPosts = this.setPosts.bind(this);
  }

  setPosts(postIDs) {
    this.setState({postIDs});
  }

  render() {
    return (
      <View style={styles.container}>
        <Posts setPosts={this.setPosts} posts={this.state.postIDs} filter="new" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default NewPosts;
