import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999'
  }
});

const Comment = props => {
  let replies = null;
  let newIndent = props.indent + 5;
  if (props.children) {
    replies = props.children.map(reply =>
      <Comment
        key={reply.id}
        indent={newIndent}
        children={reply.children}
        commentText={reply.text}
        author={reply.by}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    );
  }

  return (
    <View style={{ marginLeft: props.indent }}>
      <Text style={styles.author}>
        {props.author}
      </Text>
      {props.commentText ? <HTMLView value={props.commentText} /> : null}
      {replies}
    </View>
  );
};

export default Comment;
