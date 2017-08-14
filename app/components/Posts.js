import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  async getPosts() {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${this.props.filter}stories.json`
      );
      const postData = await response.json();

      return await postData;
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    this.props.setPosts(await this.getPosts());
    await this.setState({ loading: false });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ActivityIndicator
          size="large"
          color="#ff6600"
          animating={this.state.loading}
        />
        <FlatList
          data={this.props.posts}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <Text>
              {item}
            </Text>}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Posts;
