import React from "react";
import { TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Keyboard } from "react-native";

import { PALETTE } from "../assets/common/palette";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";
import { CreatePost } from "../components/CreatePost";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";

function CreatePostsScreen() {
  const [shouldHide, setShouldHide] = useState(false);

  useFocusEffect(() => {
    setShouldHide(false);
    return () => {
      setShouldHide(true);
    };
  });
  return (
    <>
      {shouldHide ? null : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
            <CreatePost />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      )}
    </>
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
