import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import { FlatList } from "react-native";
import PostStore from "../stores/PostStore";
import { useRouter } from "expo-router";
import PostItem from "../components/PostItem";

const PostsScreen = observer(() => {
  const router = useRouter();

  useEffect(() => {
    PostStore.loadPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={PostStore.postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem
            post={item}
            onPress={() => router.push(`/detail/${item.id}`)}
          />
        )}
      />
    </View>
  );
});

export default PostsScreen;
