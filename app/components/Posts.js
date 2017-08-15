import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { ActivityIndicator, Text, FlatList, View, WebView } from 'react-native';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postIDs: [],
      postData: [],
      refreshing: false
    };

    this.getPostIDs = this.getPostIDs.bind(this);
    this.getPost = this.getPost.bind(this);
    this.getPostData = this.getPostData.bind(this);
  }

  async getPostIDs(start, end) {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/${this.props.filter}stories.json`
      );
      const postIDs = await response.json();

      await this.setState({ postIDs: postIDs.slice(0, 30) });
    } catch (error) {
      console.error(error);
    }
  }

  async getPost(id) {
    try {
      const request = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const data = await request.json();
      return await data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPostData(postIDs) {
    try {
      const promises = postIDs.map(id => this.getPost(id));
      const posts = await Promise.all(promises);
      await console.log(posts);
      await this.setState({
        postData: posts
      });
    } catch (error) {
      console.error(error);
    }
  }

  async componentDidMount() {
    await this.getPostIDs();
    await this.getPostData(this.state.postIDs);
    await this.setState({ loading: false });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE'
        }}
      >
        <ActivityIndicator color="#ff6600" animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.postData}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              subtitle={`${item.score} Points | ${item.by}`}
              containerStyle={{ borderBottomWidth: 0 }}
            />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.loading}
        />
      </List>
    );
  }
}

export default Posts;
