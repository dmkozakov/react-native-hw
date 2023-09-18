import React from "react";
import { PALETTE } from "../assets/common/palette";
import { TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Keyboard } from "react-native";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";

import { CommentBar } from "../components/CommentBar";
import CommentPost from "../components/CommentPost";

function CommentsScreen() {
  onSendComment = () => {
    console.log("Comment sent");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
        <CommentPost />
        <CommentBar />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: PALETTE.primaryBgColor,
  },
});

export default CommentsScreen;
