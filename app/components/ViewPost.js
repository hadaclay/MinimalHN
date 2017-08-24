import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ViewPost extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Icon
        name="comment"
        size={30}
        color="#eee"
        onPress={() => {
          const { params } = navigation.state;
          navigation.navigate('Comments', {
            post: params.post,
            comments: params.comments,
            fullPost: params.fullPost,
            title: params.title
          });
        }}
      />
    ),
    title: navigation.state.params.title
  });

  render() {
    const { params } = this.props.navigation.state;
    return <WebView source={{ uri: params.url }} />;
  }
}

ViewPost.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ViewPost;
