import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999'
  }
});

const commentStyles = StyleSheet.create({
  a: {
    color: '#444444',
    textDecorationLine: 'underline'
  }
});

const Comment = props => {
  // Recursively render child comments
  let replies = null;
  let newIndent = props.indent + 3;
  if (props.childComments) {
    replies = props.childComments.map(reply =>
      <Comment
        key={reply.id}
        indent={newIndent}
        childComments={reply.children}
        commentText={reply.text}
        author={reply.by}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    );
  }

  return (
    <View style={{ marginTop: 0, marginLeft: props.indent }}>
      <Text style={styles.author}>
        {props.author || '[deleted]'}
      </Text>
      {props.commentText
        ? <HTMLView value={props.commentText} stylesheet={commentStyles} />
        : <Text>Comment Deleted</Text>}
      {replies}
    </View>
  );
};

Comment.propTypes = {
  indent: PropTypes.number.isRequired,
  childComments: PropTypes.arrayOf(PropTypes.object),
  author: PropTypes.string,
  commentText: PropTypes.string
};

Comment.defaultProps = {
  author: '[deleted]',
  commentText: 'Comment Deleted',
  childComments: []
};

export default Comment;
