import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { globalStyles } from "../assets/styles/styles";
import { PALETTE } from "../assets/common/palette";
import { ownerStyles } from "../assets/common/ownerStyles";

export function CommentCard({ userPhoto, text, date, style, owner, ...props }) {
  return (
    <View style={[styles.commentCard, owner && ownerStyles.card, style]} {...props}>
      <Image source={userPhoto} style={styles.userPhoto} />
      <View style={[styles.userComment, owner && ownerStyles.comment]}>
        <Text style={[globalStyles.text, styles.commentText]}>{text}</Text>
        <Text style={[styles.commentDate, owner && ownerStyles.date]}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentCard: {
    flexDirection: "row",
    gap: 16,
  },
  userPhoto: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  userComment: {
    flex: 1,
    gap: 8,
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: PALETTE.commentBg,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
  },
  commentDate: {
    fontSize: 10,
    alignSelf: "flex-end",
    color: PALETTE.secondaryColor,
  },
});
