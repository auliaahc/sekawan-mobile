import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import PostStore from "../stores/PostStore";
import { useLocalSearchParams } from "expo-router";

const DetailPostScreen = observer(() => {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) {
      PostStore.loadPostDetail(id);
    }
  }, [id]);

  const post = PostStore.postData;

  if (PostStore.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (PostStore.error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {PostStore.error.message}</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.container}>
        <Text>Post not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    marginTop: 8,
  },
  errorText: {
    color: "red",
  },
});

export default DetailPostScreen;