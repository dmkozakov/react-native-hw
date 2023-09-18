import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { PALETTE } from "../assets/common/palette";

import userPhoto from "../assets/img/userPhoto.jpg";
import { User } from "../components/User";

function PostsScreen() {
  return (
    <ScrollView style={styles.container}>
      <User avatar={userPhoto} name="Natali Romanova" email="email@example.com" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: PALETTE.primaryBgColor,
  },
});

export default PostsScreen;
