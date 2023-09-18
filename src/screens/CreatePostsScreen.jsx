import React, { useState } from "react";
import { TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Keyboard } from "react-native";

import { PALETTE } from "../assets/common/palette";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";
import { CreatePost } from "../components/CreatePost";

function CreatePostsScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
        <CreatePost />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
    backgroundColor: PALETTE.primaryBgColor,
  },
  createPostBox: { gap: 32 },
});

export default CreatePostsScreen;
