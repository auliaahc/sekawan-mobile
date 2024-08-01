import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { View, Text, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
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
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (PostStore.error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {PostStore.error.message}</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Post not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Card className="m-4">
        <Card.Title title={post.title} />
        <Card.Content>
          <Text className="text-base">{post.body}</Text>
        </Card.Content>
      </Card>
    </>
  );
});

export default DetailPostScreen;
