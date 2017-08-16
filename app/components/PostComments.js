import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { ActivityIndicator, FlatList, View } from 'react-native';

class PostComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      commentData: []
    };

    this.getComment = this.getComment.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    const comments = await this.getComments(params.comments);
    console.log(comments);
    await this.setState({
      commentData: comments,
      loading: false
    });
  }

  async getComment(id) {
    try {
      const request = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      const commentData = await request.json();

      if (commentData.kids) {
        return Object.assign(commentData, {
          children: await this.getComments(commentData.kids)
        });
      }
      return await commentData;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments(comments) {
    try {
      const promises = comments.map(id => this.getComment(id));
      const commentData = await Promise.all(promises);
      return await commentData;
    } catch (error) {
      console.error(error);
    }
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
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.commentData}
          renderItem={({ item }) =>
            <ListItem
              title={item.text}
              subtitle={item.by}
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

export default PostComments;
