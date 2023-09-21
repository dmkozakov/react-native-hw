import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { CommentCard } from "./CommentCard";
import { PALETTE } from "../assets/common/palette";

import examplePost from "../assets/img/examplePost.jpg";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";

export default function CommentPost() {
  return (
    <View>
      <View style={{ paddingHorizontal: 16 }}>
        <Image style={styles.photo} source={examplePost} />
      </View>

      <ScrollView contentContainerStyle={styles.commentsBox}>
        <CommentCard
          userPhoto={user1}
          text="Really love your most recent photo. I’ve been trying to capture the same thing for
                  a few months and would love some tips!"
          date="09 червня, 2020 | 08:40"
        />

        <CommentCard
          userPhoto={user2}
          text="A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they
                  tend to get a bit sharper images."
          date="09 червня, 2020 | 09:14"
          owner
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  commentsBox: {
    gap: 24,
    paddingHorizontal: 16,
  },
});
