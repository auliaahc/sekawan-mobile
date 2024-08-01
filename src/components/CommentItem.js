import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentItem = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{comment.name}</Text>
        <Text style={styles.email}>{comment.email}</Text>
      </View>
      <Text style={styles.body}>{comment.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: "gray",
  },
});

export default CommentItem;
