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
      refreshing: false,
      startPost: 0,
      endPost: 30
    };

    this.getPost = this.getPost.bind(this);
    this.getPostIDs = this.getPostIDs.bind(this);
    this.getPostData = this.getPostData.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  async componentDidMount() {
    await this.getPostIDs();
    await this.getPostData(this.state.postIDs);
    await this.setState({ loading: false });
  }

  async getPostIDs() {
    let response, postIDs;
    try {
      if (this.state.postIDs.length <= 0) {
        response = await fetch(
          `https://hacker-news.firebaseio.com/v0/${this.props
            .filter}stories.json`
        );
        postIDs = await response.json();
      }

      const { startPost, endPost } = this.state;
      await this.setState({
        postIDs:
          startPost === 0
            ? postIDs.slice(startPost, endPost)
            : [...this.state.postIDs, ...postIDs.slice(startPost, endPost)],
        startPost: startPost + 30,
        endPost: endPost + 30
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getPostData(postIDs) {
    try {
      const promises = postIDs.map(id => this.getPost(id));
      const posts = await Promise.all(promises);
      await this.setState({
        postData:
          this.state.postData.length === 0
            ? posts
            : [...this.state.postData, ...posts]
      });
    } catch (error) {
      console.error(error);
    }
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

  async handleRefresh() {
    this.setState({
      loading: true,
      startPost: 0,
      endPost: 30,
      postData: [],
      postIDs: []
    });

    await this.getPostIDs();
    await this.getPostData(this.state.postIDs);
    await this.setState({ loading: false });
  }

  async handleLoadMore() {
    if (this.state.postData.length === 0) return;
    if (this.state.loading) return;

    this.setState({ loading: true });
    await this.getPostIDs();
    await this.getPostData(this.state.postIDs.slice(-30));
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
          borderColor: '#ced0ce',
          paddingBottom: 20
        }}
      >
        <ActivityIndicator animating size="large" />
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
                .fromNow()} | ${item.descendants} comments`}
              rightIcon={{ name: 'comment' }}
              onPressRightIcon={() =>
                navigate('Comments', {
                  post: item.id,
                  comments: item.kids,
                  fullPost: item,
                  title: item.title
                })}
              onPress={() => {
                if (item.url) {
                  navigate('ViewPost', {
                    url: item.url,
                    post: item.id,
                    comments: item.kids,
                    fullPost: item,
                    title: item.title
                  });
                } else {
                  // If no url (Ask HN etc, go to Comments)
                  navigate('Comments', {
                    post: item.id,
                    comments: item.kids,
                    fullPost: item,
                    title: item.title
                  });
                }
              }}
              containerStyle={{ borderBottomWidth: 0 }}
            />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.loading}
          onEndReached={this.handleLoadMore}
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
