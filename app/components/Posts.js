import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import moment from 'moment';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      postIDs: [],
      postData: [],
      refreshing: false
    };

    this.getPost = this.getPost.bind(this);
    this.getPostIDs = this.getPostIDs.bind(this);
    this.getPostData = this.getPostData.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  async componentDidMount() {
    await this.getPostIDs();
    await this.getPostData(this.state.postIDs);
    await this.setState({ loading: false });
  }

  async getPost(id) {
    try {
      const request = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const postData = await request.json();
      return await postData;
    } catch (error) {
      console.error(error);
    }
  }

  async getPostData(postIDs) {
    try {
      const promises = postIDs.map(id => this.getPost(id));
      const posts = await Promise.all(promises);
      await this.setState({
        postData: posts
      });
    } catch (error) {
      console.error(error);
    }
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

  async handleRefresh() {
    this.setState({ loading: true });
    await this.getPostIDs();
    await this.getPostData(this.state.postIDs);
    await this.setState({ loading: false });
  }

  renderSeparator = () =>
    <View
      style={{
        height: 1,
        backgroundColor: '#ced0ce'
      }}
    />;

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#ced0ce'
        }}
      >
        <ActivityIndicator color="#ff6600" animating size="large" />
      </View>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <List
        containerStyle={{
          marginTop: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <FlatList
          data={this.state.postData}
          renderItem={({ item }) =>
            <ListItem
              title={
                <Text>
                  {item.title}
                </Text>
              }
              subtitle={`${item.score} points by ${item.by} ${moment
                .unix(item.time)
                .fromNow()}`}
              rightIcon={{ name: 'comment' }}
              onPressRightIcon={() =>
                navigate('Comments', {
                  post: item.id,
                  comments: item.kids,
                  fullPost: item
                })}
              onPress={() => navigate('ViewPost', { url: item.url })}
              containerStyle={{ borderBottomWidth: 0 }}
            />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.loading}
        />
      </List>
    );
  }
}

Posts.propTypes = {
  filter: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Posts;
