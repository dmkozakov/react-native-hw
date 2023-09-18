import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { PALETTE } from "../assets/common/palette";

import userPhoto from "../assets/img/userPhoto.jpg";

function PostsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.user}>
        <Image source={userPhoto} style={styles.userPhoto} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
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
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userName: {
    fontFamily: "Roboto-700",
    fontSize: 13,
  },
  userEmail: {
    fontFamily: "Roboto-400",
    fontSize: 11,
  },
});

export default PostsScreen;
