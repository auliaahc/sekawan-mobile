import React from "react";
import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PostItem = ({ post, onPress }) => (
  <List.Item
    title={post.title}
    description={post.body}
    descriptionNumberOfLines={1}
    onPress={onPress}
    style={{ backgroundColor: "white" }}
    left={(props) => (
      <MaterialCommunityIcons
        {...props}
        name="newspaper"
        size={24}
        color="black"
        style={{alignSelf: "center", marginLeft: 15}}
      />
    )}
  />
);

export default PostItem;
